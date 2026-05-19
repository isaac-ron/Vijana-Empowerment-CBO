import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-page-gradient text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
