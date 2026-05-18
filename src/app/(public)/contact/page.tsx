import React from 'react';

export default function ContactPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-gray-600">Email: info@vijanaempowerment.org</p>
          <p className="text-gray-600">Phone: +254 (0) 123 456 789</p>
          <p className="text-gray-600">Location: Nairobi, Kenya</p>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold">Send Message</button>
        </form>
      </div>
    </div>
  );
}
