import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PROGRAMS = [
  { href: '/programs/fashion-and-design', label: 'Vijana Fashion Forge' },
  { href: '/programs/beauty-therapy', label: 'Glow with Vijana' },
  { href: '/programs/driving-mechanics', label: 'Vijana Wheels' },
  { href: '/programs/computer-training', label: 'Vijana Digital Hub' },
];

const ORG = [
  { href: '/about', label: 'About us' },
  { href: '/impact', label: 'Our impact' },
  { href: '/get-involved#partnership', label: 'Partners' },
  { href: '/get-involved', label: 'Get involved' },
];

export default function Footer() {
  return (
    <footer className="bg-[#120d0b] text-[#fdf3e8]/80">
      <div className="bv-wrap py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="Vijana Empowerment Initiative home">
              <Image src="/logo-mark.svg" alt="" aria-hidden width={63} height={60} className="h-14 w-auto shrink-0" />
              <Image
                src="/logo-wordmark-light.svg"
                alt=""
                aria-hidden
                width={320}
                height={45}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[#fdf3e8]/60 max-w-sm leading-relaxed">
              A registered community based organisation training young people in Sotik Sub-County,
              Bomet County, to earn a living from a trade.
            </p>
          </div>

          <div className="md:col-span-2 space-y-5">
            <h4 className="font-display text-[0.74rem] tracking-[0.14em] uppercase text-[#fa7f2a] font-bold">
              Programs
            </h4>
            <ul className="space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-[#fdf3e8]/80 hover:text-white transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-5">
            <h4 className="font-display text-[0.74rem] tracking-[0.14em] uppercase text-[#fa7f2a] font-bold">
              Organisation
            </h4>
            <ul className="space-y-3">
              {ORG.map((o) => (
                <li key={o.label}>
                  <Link href={o.href} className="text-[#fdf3e8]/80 hover:text-white transition-colors">
                    {o.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-5">
            <h4 className="font-display text-[0.74rem] tracking-[0.14em] uppercase text-[#fa7f2a] font-bold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#fa7f2a] text-[20px]">location_on</span>
                <span className="text-[#fdf3e8]/80">Sotik Town Center, Bomet County, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#fa7f2a] text-[20px]">mail</span>
                <span className="text-[#fdf3e8]/80">hello@vijanaempowerment.org</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#fa7f2a] text-[20px]">phone</span>
                <span className="text-[#fdf3e8]/80">+254 700 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/12 flex flex-col sm:flex-row justify-between gap-3 text-[#fdf3e8]/50 text-sm">
          <span>© {new Date().getFullYear()} Vijana Empowerment Initiative · Registered CBO</span>
          <span>Sotik Sub-County · Bomet County · Kenya</span>
        </div>
      </div>
    </footer>
  );
}
