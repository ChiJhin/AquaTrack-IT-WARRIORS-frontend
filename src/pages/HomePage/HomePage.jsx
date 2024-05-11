import React from 'react';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
}
