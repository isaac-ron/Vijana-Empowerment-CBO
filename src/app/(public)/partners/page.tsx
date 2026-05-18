import React from 'react';

export default function PartnersPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Our Partners</h1>
      <p className="mt-4">We collaborate with local businesses and government agencies to provide placements for our graduates.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        <div className="h-32 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-400">Partner Logo 1</div>
        <div className="h-32 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-400">Partner Logo 2</div>
        <div className="h-32 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-400">Partner Logo 3</div>
        <div className="h-32 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-400">Partner Logo 4</div>
      </div>
    </div>
  );
}
