import { LayoutIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  Form: React.ComponentType;
}

const PageLayout: React.FC<PageLayoutProps> = ({ Form, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex w-full min-h-screen relative'>
      <div
        className={`bg-gray-100 rounded-r-md fixed h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-74' : 'w-16'
        } `}
      >
        {isSidebarOpen ? <Form /> : null}
      </div>
      <div className={`flex-grow min-h-screen ${isSidebarOpen ? 'ml-64' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
