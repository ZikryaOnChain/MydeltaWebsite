import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Delta Home Solutions',
  description: 'Professional home maintenance and repair services in Vancouver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 