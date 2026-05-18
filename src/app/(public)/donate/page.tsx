import React from 'react';

export default function DonatePage() {
  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold">Support Our Cause</h1>
      <p className="mt-4 text-gray-600">Your contributions help us reach more youth and expand our programs.</p>
      
      <div className="mt-8 grid grid-cols-1 gap-4">
        <div className="p-6 border rounded-xl hover:bg-gray-50 cursor-pointer">
          <h2 className="text-xl font-bold">Individual Donation</h2>
          <p>Support a student's kit or tuition.</p>
        </div>
        <div className="p-6 border rounded-xl hover:bg-gray-50 cursor-pointer">
          <h2 className="text-xl font-bold">Organization / Grant</h2>
          <p>Partner with us for large scale impact.</p>
        </div>
      </div>
    </div>
  );
}
