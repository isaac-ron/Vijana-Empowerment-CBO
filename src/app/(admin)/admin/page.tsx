import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <h3 className="text-sm font-medium text-blue-600 uppercase">Total Students</h3>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
          <h3 className="text-sm font-medium text-green-600 uppercase">New Applications</h3>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl">
          <h3 className="text-sm font-medium text-purple-600 uppercase">Active Partners</h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
          <h3 className="text-sm font-medium text-yellow-600 uppercase">Funds Raised</h3>
          <p className="text-2xl font-bold">$12,400</p>
        </div>
      </div>
    </div>
  );
}
