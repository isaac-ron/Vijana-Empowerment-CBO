'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Drives the Bold Voice scroll motion: reveals `.bv-reveal` elements as they
 * enter the viewport and counts up any `[data-count]` numbers. Content is fully
 * visible by default; this only enhances. Re-runs on route change.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    // React is alive and this effect runs, so we now own revealing. Cancel the
    // boot-script safety net (see layout.tsx) that would otherwise reveal-all.
    const w = window as typeof window & { __bvRevealFallback?: ReturnType<typeof setTimeout> };
    if (w.__bvRevealFallback) {
      clearTimeout(w.__bvRevealFallback);
      w.__bvRevealFallback = undefined;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reveals
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>('.bv-reveal:not(.in)'),
    );
    let io: IntersectionObserver | undefined;
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io?.unobserve(e.target);
            }
          });
        },
        // threshold 0 + a small bottom margin fires as soon as any part enters,
        // which is reliable even for sections taller than a phone viewport.
        { threshold: 0, rootMargin: '0px 0px -8% 0px' },
      );
      reveals.forEach((el) => io!.observe(el));
    }

    // Counters
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>('[data-count]'),
    );
    function animate(el: HTMLElement) {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      const dur = 1300;
      let start: number | null = null;
      function step(t: number) {
        if (start === null) start = t;
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dec);
      }
      requestAnimationFrame(step);
    }
    let cio: IntersectionObserver | undefined;
    if (reduce || !('IntersectionObserver' in window)) {
      counters.forEach((el) => {
        const dec = parseInt(el.getAttribute('data-dec') || '0', 10);
        el.textContent = parseFloat(el.getAttribute('data-count') || '0').toFixed(dec);
      });
    } else {
      cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animate(e.target as HTMLElement);
              cio?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => cio!.observe(el));
    }

    return () => {
      io?.disconnect();
      cio?.disconnect();
    };
  }, [pathname]);

  return null;
}
