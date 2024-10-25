'use client';
import React from 'react';
import styles from './styles.module.scss'; // We'll create this SCSS file next
import useProposalStore from '@/stores/proposalStore';

const FrontPage = () => {
  const {
    data: { businessName, taxFileNumber },
  } = useProposalStore();

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.logo}></div>
        <h1 className={styles.title}>
          Mutual1111 <br />
          Confidentiality <br />
          Agreement <br />
        </h1>
        <div className={styles.parties}>
          <p className={styles.partiesHeader}>PARTIES</p>
          <div className={styles.addressGrid}>
            <div className={styles.address}>
              <p>ATTENTION: {businessName}</p>
              {/* <p>
                {companyAddressArray[0]} {companyAddressArray[1]}
              </p>
              <p>{companyAddressArray[2]}</p>
              <p>
                {companyAddressArray[3]} {companyAddressArray[4]}{' '}
                {companyAddressArray[5]}
              </p> */}
            </div>
            <div className={styles.address}>
              <p>
                E XD PTY LTD <br />
                95 RILEY STREET <br />
                DARLINGHURST <br />
                SYDNEY NSW 2000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
