import React from 'react';

export default function ComputerTrainingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700">Vijana Digital Hub</h1>
      <p className="mt-4 text-lg">Computer Training & Digital Literacy</p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Curriculum Highlights</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Basic Computer Skills & Digital Literacy</li>
          <li>Online Safety & Data Management</li>
          <li>Graphic Design & Digital Marketing</li>
          <li>Web Development & Design Fundamentals</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Career Pathways</h2>
        <p>Prepares graduates for virtual assistant roles, online businesses, and digital agency employment.</p>
      </section>
    </div>
  );
}
