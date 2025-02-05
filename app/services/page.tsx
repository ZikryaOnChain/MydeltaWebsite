import React from 'react'

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder service cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Service {i}</h2>
            <p className="text-gray-600">Detailed service description goes here</p>
          </div>
        ))}
      </div>
    </div>
  )
} 