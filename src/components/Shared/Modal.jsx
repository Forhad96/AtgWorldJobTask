import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg relative max-w-[750px] w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="absolute -top-8  -right-8  z-10 btn btn-circle btn-sm"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
