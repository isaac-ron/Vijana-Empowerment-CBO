'use client';

import React, { useState } from 'react';
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
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center" aria-label="Vijana Empowerment Initiative home">
          <Image
            src="/logo-mark.svg"
            alt="Vijana Empowerment Initiative"
            width={56}
            height={56}
            priority
            className="md:hidden h-14 w-auto object-contain"
          />
          <Image
            src="/logo-lockup.svg"
            alt="Vijana Empowerment Initiative"
            width={300}
            height={80}
            priority
            className="hidden md:block h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? 'text-primary border-b-2 border-secondary font-bold pb-1 text-label-md'
                    : 'text-on-surface-variant text-label-md hover:text-primary transition-colors'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/get-involved#apply"
            className="hidden lg:block px-6 py-2.5 rounded-full border-2 border-secondary text-secondary text-label-md hover:bg-white transition-all"
          >
            Apply
          </Link>
          <Link
            href="/get-involved#donate-form"
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-label-md hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            Donate Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-on-surface-variant"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface">
          <ul className="flex flex-col px-margin-mobile py-4 gap-1 max-w-container-max mx-auto">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      active
                        ? 'block py-3 px-2 text-primary font-bold text-label-md border-l-2 border-secondary'
                        : 'block py-3 px-2 text-on-surface-variant text-label-md hover:text-primary transition-colors'
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/get-involved#apply"
                onClick={() => setOpen(false)}
                className="block text-center px-6 py-2.5 rounded-full border-2 border-secondary text-secondary text-label-md"
              >
                Apply
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
