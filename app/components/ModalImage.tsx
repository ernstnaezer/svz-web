'use client';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';

import ExportedImage from 'next-image-export-optimizer';

type ModalImageProps = {
  imageUrl: StaticImageData;
};

const ModalImage: React.FC<ModalImageProps> = ({ imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ExportedImage
        src={imageUrl}
        alt='Thumbnail'
        className='cursor-pointer'
        width={200}
        onClick={openModal}
      />
      <Modal imageUrl={imageUrl} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ModalImage;
