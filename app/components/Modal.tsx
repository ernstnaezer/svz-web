import { StaticImageData } from 'next/image';
import React, { useEffect } from 'react';

import ExportedImage from 'next-image-export-optimizer';

type ModalProps = {
  imageUrl: StaticImageData;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ imageUrl, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const close = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='h-6 w-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  );

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={onClose}
    >
      <div
        className='relative max-h-full max-w-3xl overflow-auto rounded-md bg-gray-800 px-8 shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <ExportedImage
          src={imageUrl}
          alt='Popup'
          className='mx-auto block max-h-full max-w-full object-contain'
        />
        <button
          onClick={onClose}
          className='absolute right-0 top-0 mr-2 mt-2 text-gray-200'
        >
          {close}
        </button>
      </div>
    </div>
  );
};

export default Modal;
