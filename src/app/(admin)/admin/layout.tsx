import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Vijana Admin</h2>
        <nav className="space-y-4">
          <div className="hover:text-blue-400 cursor-pointer">Dashboard</div>
          <div className="hover:text-blue-400 cursor-pointer">Students</div>
          <div className="hover:text-blue-400 cursor-pointer">Cohorts</div>
          <div className="hover:text-blue-400 cursor-pointer">Partners</div>
          <div className="hover:text-blue-400 cursor-pointer">M&E Metrics</div>
        </nav>
      </aside>
      <main className="flex-1">
        <header className="h-16 bg-white border-b flex items-center justify-end px-8">
          <div className="font-medium text-gray-700">Admin User</div>
        </header>
        {children}
      </main>
    </div>
  );
}
