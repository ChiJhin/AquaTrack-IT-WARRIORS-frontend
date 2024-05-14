import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../../redux/water/operations';
import { showNotification } from '../../../utils/notification';
import css from './DeleteWaterModal.module.css';

export default function DeleteWaterModal({ isOpen, closeModal, entryId }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      // Simulate API request to delete water entry (replace with actual API call)
      await dispatch(deleteWater(entryId));// Assuming entryId is provided as a prop

      // Show success notification
      showNotification('Water entry deleted successfully!', 'success');

      // Close modal after successful deletion
      closeModal();
    } catch (error) {
      // Show error notification
      showNotification('Failed to delete water entry. Please try again.', 'error');
      console.error('Delete operation failed:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} styleVariant="modalDelete">
      <h3 className={css.title}>Delete entry</h3>
      <p className={css.question}>Are you sure you want to delete the entry?</p>
      <div className={css.buttonGroup}>
        <button
          className={css.deleteButton}
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
        <button className={css.cancelButton} onClick={closeModal} disabled={isDeleting}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
