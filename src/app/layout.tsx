'use client';

import { useDataStore } from '@/stores/dataStore';
import './globals.css';
// import type { Metadata } from 'next'
import { SideDrawer } from '@components';

// export const metadata: Metadata = {
//   title: 'Higher',
//   description: 'Read. Think. Write.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDrawerOpen = useDataStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useDataStore((state) => state.setIsDrawerOpen);

  return (
    <html lang='en'>
      <body className={`bg-gray-900 min-h-screen flex flex-col w-full  `}>
        <header
          className={`fixed h-16 w-3/4 rounded-2xl mx-auto top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out`}
        >
          <div className='container mx-auto px-4'>
            <nav className='flex items-center justify-between py-4'>
              <div className='text-white font-bold text-xl cursor-pointer'>
                Craftify
              </div>
              <ul className='flex space-x-4'>
                <li>
                  <a href='#' className='text-white hover:text-gray-300'>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='/serviceContract'
                    className='text-white hover:text-gray-300'
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a href='/mutual' className='text-white hover:text-gray-300'>
                    mutual
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white hover:text-gray-300'>
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className={`pt-16 print:pt-0`}>{children}</main>
      </body>
    </html>
  );
}
