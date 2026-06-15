import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollFX from '@/components/layout/ScrollFX';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fdf3e8] text-on-surface min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <ScrollFX />
    </div>
  );
}
