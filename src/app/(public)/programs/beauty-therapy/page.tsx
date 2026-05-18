import React from 'react';

export default function BeautyTherapyPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600">Glow with Vijana</h1>
      <p className="mt-4 text-lg">Beauty Therapy Trade</p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Curriculum Highlights</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Hair Dressing & Styling</li>
          <li>Nail Technology & Makeup</li>
          <li>Spa Management (Local product focus)</li>
          <li>Salon Management</li>
          <li>Customer Service Excellence</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Job Placement</h2>
        <p>We partner with local salons for job placement and support mobile service graduate pathways.</p>
      </section>
    </div>
  );
}
