'use client'

import './globals.css'
// import type { Metadata } from 'next'
import {SideDrawer} from '@components'
import { useState } from 'react'

// export const metadata: Metadata = {
//   title: 'Higher',
//   description: 'Read. Think. Write.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <html lang="en">
      <body className='bg-gray-900'>
        <header className="fixed w-3/4 rounded-2xl mx-auto top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-4">
              <div 
                className="text-white font-bold text-xl cursor-pointer"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                Higher
              </div>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Features</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Testimonials</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <SideDrawer  isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
