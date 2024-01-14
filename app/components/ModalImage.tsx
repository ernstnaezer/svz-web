'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';

type ModalImageProps = {
  imageUrl: StaticImageData;
};

const ModalImage: React.FC<ModalImageProps> = ({ imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Image
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
