import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-16 bg-[#f5efeb] text-on-surface border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center" aria-label="Vijana Empowerment Initiative home">
            <Image
              src="/logo-wordmark.svg"
              alt="Vijana Empowerment Initiative"
              width={280}
              height={90}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Empowering youth for a resilient future through vocational excellence and community
            partnership. Based in Sotik Sub-County, Bomet County, Kenya.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-white hover:border-transparent transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a
              href="#"
              aria-label="Email us"
              className="w-10 h-10 rounded-full bg-white border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-white hover:border-transparent transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 rounded-full bg-white border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-white hover:border-transparent transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-label-md uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="space-y-3 text-body-md">
            <li><Link href="/programs" className="text-on-surface-variant hover:text-secondary transition-colors">Programs</Link></li>
            <li><Link href="/about" className="text-on-surface-variant hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/impact" className="text-on-surface-variant hover:text-secondary transition-colors">Impact Report</Link></li>
            <li><Link href="/get-involved" className="text-on-surface-variant hover:text-secondary transition-colors">Get Involved</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-label-md uppercase tracking-widest text-primary">Programs</h4>
          <ul className="space-y-3 text-body-md">
            <li><Link href="/programs/fashion-and-design" className="text-on-surface-variant hover:text-secondary transition-colors">Vijana Fashion Forge</Link></li>
            <li><Link href="/programs/beauty-therapy" className="text-on-surface-variant hover:text-secondary transition-colors">Glow with Vijana</Link></li>
            <li><Link href="/programs/driving-mechanics" className="text-on-surface-variant hover:text-secondary transition-colors">Vijana Wheels</Link></li>
            <li><Link href="/programs/computer-training" className="text-on-surface-variant hover:text-secondary transition-colors">Vijana Digital Hub</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-label-md uppercase tracking-widest text-primary">Contact Info</h4>
          <ul className="space-y-4 text-body-md">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="text-on-surface-variant">Sotik Town Center, Bomet County, Kenya</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="text-on-surface-variant">hello@vijanaempowerment.org</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary">phone</span>
              <span className="text-on-surface-variant">+254 700 000 000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto pt-8 border-t border-outline-variant/40 text-center">
        <p className="text-label-sm text-on-surface-variant/80">
          © {new Date().getFullYear()} Vijana Empowerment Initiative. Registered CBO &middot;
          Registration No: VEI/CBO/STK/2024/001
        </p>
      </div>
    </footer>
  );
}
