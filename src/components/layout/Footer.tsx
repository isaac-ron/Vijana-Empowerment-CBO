import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface py-16 border-t border-outline-variant/20">
      <div className="main-container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <span className="font-display text-2xl font-black text-secondary-fixed-dim">Vijana Empowerment</span>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            © 2024 Vijana Empowerment Initiative. Empowering youth for a resilient future. Located in Sotik Sub-County, Bomet, Kenya.
          </p>
          <div className="flex gap-4">
            <div className="p-2 bg-white/10 rounded-full hover:bg-secondary-container transition-colors cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-secondary-container transition-colors cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-display text-sm uppercase tracking-widest text-secondary-fixed-dim">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/programs" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Programs</Link></li>
            <li><Link href="/about" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">About Us</Link></li>
            <li><Link href="/partners" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Impact Report</Link></li>
            <li><Link href="/donate" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Donate</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display text-sm uppercase tracking-widest text-secondary-fixed-dim">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Careers</Link></li>
            <li><Link href="#" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Annual Reports</Link></li>
            <li><Link href="#" className="hover:text-secondary-container transition-colors hover:underline underline-offset-4">Success Stories</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display text-sm uppercase tracking-widest text-secondary-fixed-dim">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-secondary-container">📍</span>
              <span>Sotik Town Center, Bomet County, Kenya</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary-container">✉️</span>
              <span>hello@vijanaempowerment.org</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary-container">📞</span>
              <span>+254 700 000 000</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="main-container pt-8 mt-12 border-t border-white/10 text-center">
        <p className="text-xs opacity-60">Registration No: VEI/CBO/STK/2024/001 | Registered CBO in the Republic of Kenya</p>
      </div>
    </footer>
  );
}
