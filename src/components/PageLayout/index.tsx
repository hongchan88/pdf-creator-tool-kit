import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useDataStore } from '../../stores/dataStore';
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons';
interface PageLayoutProps {
  children: React.ReactNode;
  Form: React.ComponentType;
}

const PageLayout: React.FC<PageLayoutProps> = ({ Form, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const proposalStore = useDataStore();

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    proposalStore.setContentRef(
      contentRef as RefObject<Element | Text> | undefined
    );
  }, []);

  return (
    <div className='flex w-full min-h-screen'>
      <div
        className={`bg-gray-100 rounded-r-md fixed h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-74' : 'w-13'
        } ${styles.form}`}
      >
        <div className='flex justify-end p-3'>
          {isSidebarOpen ? (
            <DoubleArrowLeftIcon
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className='w-7 h-7 cursor-pointer'
            />
          ) : (
            <DoubleArrowRightIcon
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className='w-7 h-7 cursor-pointer'
            />
          )}
        </div>
        {isSidebarOpen ? <Form /> : null}
      </div>
      <div
        ref={contentRef}
        className={` ${styles.page} ${!isSidebarOpen ? styles.minimize : ''} `}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
