'use client';

import { useDataStore } from '@/stores/dataStore';
import './globals.css';
// import type { Metadata } from 'next'
import { SideDrawer } from '@components';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  console.log(children, 'tt');
  const currentPath = usePathname(); // Use usePathname to get the current path
  const router = useRouter();
  const [isSmaller, setIsSmaller] = useState(false);
  useEffect(() => {
    console.log('Current page:', currentPath); // Log the current page
  }, [currentPath]);
  return (
    <html lang='en'>
      <body className={`bg-themeBackground   `}>
        <AuroraBackground>
          <div className='relative min-h-screen flex flex-col w-full'>
            <motion.div
              className={`fixed h-16  ${
                currentPath == '/serviceContract'
                  ? 'left-0 top-0 w-[448px]'
                  : 'mx-auto top-8 left-0 right-0 w-[60%]'
              }  rounded-2xl z-50 bg-white bg-opacity-30 backdrop-blur-md transition-all duration-300 ease-in-out`}
              initial={{}} // Start with 100% width
              animate={{}} // Change width on trigger
              transition={{ delay: 0.2 }}
            >
              <div className='container mx-auto px-4'>
                <nav className='flex items-center justify-between py-4'>
                  <div className='text-white font-bold text-xl cursor-pointer'>
                    <a
                      onClick={() => {
                        router.push('/');
                      }}
                    >
                      Craftify
                    </a>
                    <div className='flex justify-center'>
                      {currentPath == '/' && (
                        <motion.div
                          className='w-2 h-2 bg-gray-900 rounded-2xl'
                          layoutId='circle'
                        />
                      )}
                    </div>
                  </div>
                  <ul className='flex space-x-4'>
                    <li>
                      <a
                        onClick={() => {
                          router.push('/serviceContract');
                        }}
                        className='text-white cursor-pointer hover:text-gray-300 '
                      >
                        Demo
                      </a>
                      <div className='flex justify-center'>
                        {currentPath == '/serviceContract' && (
                          <motion.div
                            className='w-2 h-2 bg-gray-900 rounded-2xl self-center'
                            layoutId='circle'
                          />
                        )}
                      </div>
                    </li>
                    {/* <li>
                      <a
                        onClick={() => {
                          router.push('/login');
                        }}
                        className='text-white hover:text-gray-300'
                      >
                        Login
                      </a>
                      <div className='flex justify-center'>
                        {currentPath == '/login' && (
                          <motion.div
                            className='w-2 h-2 bg-gray-900  rounded-2xl'
                            layoutId='circle'
                          />
                        )}
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </motion.div>

            <main className={`pt-16 print:pt-0`}>{children}</main>
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
}
