'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export function NavBar() {
  return (
    <div className='w-3/4 h-24 flex justify-between rounded-lg my-10 fixed top-7 bg-gray-700 bg-opacity-50 backdrop-blur-sm z-10'>
      <div>logo</div>
      <div className=' w-14 h-14 cursor-pointer bg-slate-900 rounded-full flex justify-center items-center'>
        <GitHubLogoIcon className='w-8 h-8' />
      </div>
    </div>
  );
}
