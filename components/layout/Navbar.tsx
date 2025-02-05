'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full py-4 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Delta Home
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="/"
            className={`${pathname === '/' ? 'border-b-2 border-black' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/services"
            className={`${pathname === '/services' ? 'border-b-2 border-black' : ''}`}
          >
            Services
          </Link>
        </div>

        {/* Phone Number */}
        <a 
          href="tel:+1234567890" 
          className="text-blue-600 hover:text-blue-800"
        >
          (123) 456-7890
        </a>
      </div>
    </nav>
  )
} 