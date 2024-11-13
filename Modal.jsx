import React from 'react';
import axios from 'axios';
import './Modal.css';

const Modal = ({ show, onClose, formData, onFinalSubmit, isEditing, detailId }) => {
  if (!show) return null;

  const handleFinalSubmit = async () => {
    try {
      if (isEditing) {
        // Update existing detail
        await axios.put(`http://localhost:3001/details/${detailId}`, formData);
      } else {
        // Submit new detail
        await axios.post('http://localhost:3001/details', { ...formData, id: Date.now() });
      }
      onFinalSubmit(); // Callback to close modal and refresh data
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isEditing ? 'Edit Detail' : 'Confirm Your Submission'}</h2>
        {/* Render the detail form here */}
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        {/* Other fields... */}
        <div className="modal-actions">
          <button onClick={onClose} className="button">Cancel</button>
          <button onClick={handleFinalSubmit} className="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
