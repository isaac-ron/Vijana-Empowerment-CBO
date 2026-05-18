import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Vijana Empowerment CBO</h1>
      <p className="mt-4 text-xl">Empowering youth for a better tomorrow.</p>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-600">Impact Tracking Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">Employment Rate</h3>
            <p className="text-3xl font-bold text-green-600">80%</p>
            <p className="text-sm text-gray-500">Graduates employed/self-employed</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">Income Increase</h3>
            <p className="text-3xl font-bold text-green-600">50%+</p>
            <p className="text-sm text-gray-500">Increase in beneficiary income</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">Life Skills</h3>
            <p className="text-3xl font-bold text-green-600">90%</p>
            <p className="text-sm text-gray-500">Improved confidence & skills</p>
          </div>
        </div>
      </section>
    </main>
  );
}
