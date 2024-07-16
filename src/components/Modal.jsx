import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={handleClose}>&times;</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;