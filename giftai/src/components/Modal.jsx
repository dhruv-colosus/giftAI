import React from "react";

function Modal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
      </div>
    </div>
  );
}

export default Modal;
