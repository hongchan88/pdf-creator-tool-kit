import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Craftify | Document workspace',
  description: 'Customize a creative services contract, preview your document and save it as PDF using your browser.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-slate-900'>
        <a href='#main-content' className='sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:p-3'>Skip to content</a>
        <header className='sticky top-0 z-30 h-16 border-b border-slate-700 bg-slate-900 text-white'>
          <nav aria-label='Main navigation' className='flex h-full items-center justify-between px-4 sm:px-8'>
            <Link href='/' className='font-bold text-xl'>Craftify</Link>
            <Link href='/serviceContract' className='rounded border border-slate-500 px-4 py-2 hover:bg-slate-800'>Open document editor</Link>
          </nav>
        </header>
        <main id='main-content'>{children}</main>
      </body>
    </html>
  );
}
