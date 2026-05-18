import React from 'react';

export default function DrivingMechanicsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">Vijana Wheels</h1>
      <p className="mt-4 text-lg">Driving and Mechanics Trade</p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Curriculum Highlights</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Practical Driving Lessons</li>
          <li>Traffic Rules & Road Safety</li>
          <li>Vehicle Maintenance & Basic Mechanics</li>
          <li>Troubleshooting & Repairs</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Partnerships</h2>
        <p>Collaborations with local driving schools and garages ensure students get real-world experience and job opportunities.</p>
      </section>
    </div>
  );
}
