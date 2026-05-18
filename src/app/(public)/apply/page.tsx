import React from 'react';

export default function ApplicationPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto border rounded-2xl shadow-lg my-12">
      <h1 className="text-3xl font-bold mb-6">Student Application Portal</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input type="text" className="w-full p-2 border rounded mt-1" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium">Age (Target: 18-35)</label>
          <input type="number" className="w-full p-2 border rounded mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select className="w-full p-2 border rounded mt-1">
            <option>School Leaver</option>
            <option>Teenage Mother</option>
            <option>Single Mother</option>
            <option>Orphan</option>
            <option>Person with Disability</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </div>
  );
}
