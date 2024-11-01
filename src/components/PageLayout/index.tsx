import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './styles.module.scss';
import { useReactToPrint } from 'react-to-print';
import { useDataStore } from '../../stores/dataStore';

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
          isSidebarOpen ? 'w-74' : 'w-16'
        } ${styles.form}`}
      >
        {isSidebarOpen ? <Form /> : null}
      </div>
      <div
        ref={contentRef}
        className={`${isSidebarOpen ? 'ml-64' : ''}  ${styles.page} `}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
