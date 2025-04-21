'use client';

import { useDataStore } from '@/stores/dataStore';
import React from 'react';
// import { useProposalStore } from '../../stores/proposalStore';

export const SideDrawer: React.FC = () => {
  const exportPDF = useDataStore((state) => state.exportPDF);
  const isDrawerOpen = useDataStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useDataStore((state) => state.setIsDrawerOpen);
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 transform ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className='absolute top-2 right-2 text-white'
      >
        Close
      </button>
      <div className='p-4'>
        <p>form</p>
        <button
          onClick={exportPDF}
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
        >
          Export PDF
        </button>
      </div>
    </div>
  );
};
