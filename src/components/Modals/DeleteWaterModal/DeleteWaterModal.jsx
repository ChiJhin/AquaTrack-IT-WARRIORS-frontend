import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWaterRecord } from '../api';
import { updateWaterData } from '../redux/actions';
import './DeleteWaterModal.css';

export default function DeleteWaterModal({ recordId, onClose }) {
  const dispatch = useDispatch();
  const [backendError, setBackendError] = useState(null);

  const handleDelete = async () => {
    try {
      await deleteWaterRecord(recordId); // API call to delete record
      dispatch(updateWaterData(null)); // Update Redux state after deletion
      onClose(); // Close the modal after successful deletion
    } catch (error) {
      setBackendError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="delete-water-modal">
      <h2 className="modal-title">Delete Entry</h2>
      <p className="modal-message">Are you sure you want to delete the entry?</p>
      <div className="modal-buttons">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
      {backendError && (
        <div className="error-notification">
          <p>{backendError}</p>
          <button onClick={() => setBackendError(null)}>Close</button>
        </div>
      )}
    </div>
  );
};







