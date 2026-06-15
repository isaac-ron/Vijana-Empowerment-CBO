'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/about', label: 'About' },
  { href: '/impact', label: 'Impact' },
  { href: '/get-involved', label: 'Get Involved' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-50 bg-[#120d0b] text-[#fdf3e8] border-b-2 border-black">
      <nav className="bv-wrap flex justify-between items-center py-3 gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Vijana Empowerment Initiative home">
          <Image src="/logo-mark.svg" alt="" aria-hidden width={63} height={60} priority className="h-12 w-auto shrink-0" />
          <Image
            src="/logo-wordmark-light.svg"
            alt=""
            aria-hidden
            width={300}
            height={42}
            priority
            className="hidden sm:block h-6 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'relative font-semibold text-[0.95rem] pb-1 transition-colors ' +
                  (active
                    ? 'text-white after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-[#fa7f2a]'
                    : 'text-[#fdf3e8]/80 hover:text-white')
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link href="/get-involved#apply" className="bv-btn bv-btn-line hidden lg:inline-flex">
            Apply
          </Link>
          <Link href="/get-involved#donate-form" className="bv-btn bv-btn-red">
            Donate <span className="arr" aria-hidden>→</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-[#fdf3e8]"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#120d0b]">
          <ul className="bv-wrap flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      'block py-3 px-1 font-display font-bold text-lg ' +
                      (active ? 'text-[#fa7f2a]' : 'text-[#fdf3e8] hover:text-[#fa7f2a]')
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Link
                href="/get-involved#apply"
                onClick={() => setOpen(false)}
                className="bv-btn bv-btn-line w-full justify-center"
              >
                Apply to train
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
