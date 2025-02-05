import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[600px] mb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Home maintenance"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Home is everything</h1>
        <p className="text-xl mb-8">Let's maintain your safe heaven</p>
        <Link 
          href="/quote"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-fit"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  )
} 