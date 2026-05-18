import React from 'react';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    { title: "Vijana Fashion Forge", slug: "fashion-and-design", description: "Tailoring, garment making, and entrepreneurship." },
    { title: "Glow with Vijana", slug: "beauty-therapy", description: "Hair dressing, styling, and spa management." },
    { title: "Vijana Wheels", slug: "driving-mechanics", description: "Driving school and basic mechanics." },
    { title: "Vijana Digital Hub", slug: "computer-training", description: "Digital literacy, graphic design, and web development." },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Our Training Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {programs.map((program) => (
          <div key={program.slug} className="p-6 border rounded-xl hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold">{program.title}</h2>
            <p className="mt-2 text-gray-600">{program.description}</p>
            <Link 
              href={`/programs/${program.slug}`}
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
