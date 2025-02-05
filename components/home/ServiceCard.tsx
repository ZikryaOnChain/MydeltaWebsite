import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/lib/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services#${service.id}`} className="group">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        </div>
      </div>
    </Link>
  )
} 