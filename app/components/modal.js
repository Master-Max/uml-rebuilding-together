import React from 'react';

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  // Function to stop click events from closing the modal when clicking on the content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

// &#10005;
// &#128939;
// &#128473;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button onClick={onClose} className="close-button font-bold hover:text-red-500">
          &#10761;
          {/* X */}
        </button>
        {children}
      </div>

      {/* Basic Styles for Modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000; /* Ensure the modal is above other content */
        }

        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Modal;