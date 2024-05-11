import React from 'react';
import styles from './AdvantagesSection.module.css';
import imageGirl from '../../assets/mobile/girl.jpg';

export default function AdvantagesSection() {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.imageContainer}>
        <img 
         srcSet="../../assets/mobile/girl.jpg 1x, ../../assets/mobile/girl_2x.jpg 2x"
         src={imageGirl}//"../../assets/mobile/girl.jpg" 
         alt="Girl" 
         height="353"
         width="343" />
        
        <p>Our happy customers</p>
      </div>

      <span>Habit drive</span>
      <span>View statistics</span>
      <span>Personal rate setting</span>
    </section>
  );
}
