import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold">Delta Home Solutions</h3>
        
        <a 
          href="tel:+1234567890" 
          className="text-blue-600 hover:text-blue-800"
        >
          (123) 456-7890
        </a>

        <Link 
          href="/quote"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Get a Free Quote
        </Link>
      </div>
    </footer>
  )
} 