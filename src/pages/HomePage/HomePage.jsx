import React, { useState } from 'react';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';

import Modals from '../../components/Modals/Modal/Modal'; // Import Modal
import DeleteWaterModal from '../../components/Modals/DeleteWaterModal/DeleteWaterModal'; // Import

import css from './HomePage.module.css';



export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  // Hardcoded entryId for testing (replace with your desired value)
  const entryId = '123456';

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className={css.container}>
      <div className={css.page}>
        <WelcomeSection />
        <AdvantagesSection />
        <button onClick={openModal}>Show Modal</button>
      </div>
      {/* Render modal if showModal state is true */}
      {showModal && (
        <Modals
          isOpen={showModal}
          closeModal={closeModal}
          styleVariant="modalDelete"
        >
          <DeleteWaterModal 
          isOpen={showModal}
          closeModal={closeModal}
          entryId={entryId}
          />
        </Modals>
      )}
    </div>
  );
}