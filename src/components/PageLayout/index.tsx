import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useDataStore } from '../../stores/dataStore';

interface PageLayoutProps {
  children: React.ReactNode;
  Form: React.ComponentType;
}

const PageLayout: React.FC<PageLayoutProps> = ({ Form, children }) => {
  const [view, setView] = useState<'edit' | 'preview'>('edit');
  const setContentRef = useDataStore((state) => state.setContentRef);
  const contentRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState({ scale: 1, height: 5900 });

  useEffect(() => {
    setContentRef(contentRef);
    return () => setContentRef(undefined);
  }, [setContentRef]);

  useEffect(() => {
    const updatePreview = () => {
      const width = viewportRef.current?.clientWidth;
      const height = contentRef.current?.scrollHeight;
      if (width && height) setPreview({ scale: Math.min(1, width / 794), height });
    };
    const observer = new ResizeObserver(updatePreview);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    updatePreview();
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.workspace}>
      <div className={styles.tabs} role='group' aria-label='Document view'>
        <button type='button' aria-pressed={view === 'edit'} onClick={() => setView('edit')}>Edit details</button>
        <button type='button' aria-pressed={view === 'preview'} onClick={() => setView('preview')}>Preview document</button>
      </div>
      <aside aria-label='Document details' className={`${styles.form} ${view !== 'edit' ? styles.mobileHidden : ''}`}>
        <Form />
      </aside>
      <section aria-label='Document preview' tabIndex={0} className={`${styles.preview} ${view !== 'preview' ? styles.mobileHidden : ''}`}>
        <p className={styles.previewHint}>Preview fits your screen. PDF export uses full-size pages.</p>
        <div ref={viewportRef} className={styles.viewport}>
          <div className={styles.frame} style={{ '--preview-scale': preview.scale, '--document-height': `${preview.height}px` } as React.CSSProperties}>
            <div ref={contentRef} className={styles.page}>{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageLayout;
