import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <nav className="main-container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">V</div>
          <span className="font-display text-xl font-extrabold text-primary tracking-tight hidden sm:block">
            Vijana Empowerment
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-primary font-bold hover:text-primary-container transition-colors">Home</Link>
          <Link href="/programs" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Programs</Link>
          <Link href="/about" className="text-on-surface-variant font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/partners" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Impact</Link>
          <Link href="/apply" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Get Involved</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/apply" 
            className="hidden lg:block px-6 py-2.5 rounded-full border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-all"
          >
            Apply
          </Link>
          <Link 
            href="/donate" 
            className="px-6 py-2.5 rounded-full bg-primary text-white font-bold hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
