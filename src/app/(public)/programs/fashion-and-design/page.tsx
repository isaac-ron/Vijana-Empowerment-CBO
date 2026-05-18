import React from 'react';

export default function FashionDesignPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-600">Vijana Fashion Forge</h1>
      <p className="mt-4 text-lg">Fashion and Design Trade</p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Curriculum Highlights</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Tailoring & Garment Making</li>
          <li>Pattern Making</li>
          <li>Textile Knowledge (Sustainable Fashion)</li>
          <li>Fashion Illustration</li>
          <li>Branding & Entrepreneurship</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Career Tracks</h2>
        <p>Graduates can start their own businesses, work in the garment industry, or create accessories for local designers.</p>
      </section>
    </div>
  );
}
