import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import styles from './WelcomeSection.module.css';

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <Logo />
       {/* Text Content */}
       <div className={styles.textContent}>
         <h2 className={styles.subtitle}>Record daily water intake and track</h2>
         <h1 className={styles.mainTitle}>Water consumption tracker</h1>
       </div>
      
      {/* Buttons */}
      <div className={styles.ctaButtons}>
        <Link to="/signup" className={styles.tryTrackerBtn}>
          Try tracker
        </Link>
        <Link to="/signin" className={styles.signInBtn}>
          Sign In
        </Link>
      </div>
    </section>
  );
}
