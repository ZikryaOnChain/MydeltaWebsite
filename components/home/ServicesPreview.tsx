import React from 'react'
import Link from 'next/link'
import ServiceCard from './ServiceCard'

const PREVIEW_SERVICES: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Professional plumbing services for your home',
    imageUrl: '/images/services/plumbing.jpg'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Expert electrical repairs and installations',
    imageUrl: '/images/services/electrical.jpg'
  },
  {
    id: 'hvac',
    title: 'HVAC',
    description: 'Heating, ventilation, and air conditioning services',
    imageUrl: '/images/services/hvac.jpg'
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <Link 
            href="/services"
            className="text-blue-600 hover:text-blue-800"
          >
            View all services →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVIEW_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
} 