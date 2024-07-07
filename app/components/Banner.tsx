import React from 'react';
import Image from 'next/image';

import shieldImg from '../../public/img/svz-shield.png';

interface BannerTextProps {
  message: 'OpenDag' | 'ZomerStop';
}

const BannerText = {
  OpenDag: {
    header: '2e Pinksterdag - OPEN DAG',
    body: (
      <p>
        Maandag 20 mei bent u van 12:00 tot 17:00 van harte welkom op onze open
        dag. Verspreid over de dag worden er door onze leden series geschoten in
        verschillende disciplines zodat u kunt kennismaken met de sport en onze
        vereniging. Ook u kunt zelf, onder begeleiding en vanaf 14 jaar, de
        perfecte tien schieten met een luchtgeweer.
      </p>
    ),
  },
  ZomerStop: {
    header: 'Zomersluiting (20 juli t/m 18 augustus)',
    body: (
      <p>
        Van 20 juli t/m 18 augustus is de vereniging gesloten voor de zomerstop.
        Wij wensen iedereen een fijne vakantie en zien u graag weer na de zomer.
      </p>
    ),
  },
};

const Banner: React.FC<BannerTextProps> = ({ message }) => {
  const { header, body } = BannerText[message];

  return (
    <div className='w-full text-nato-blue'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='container'>
          <div className='flex flex-col items-center justify-between py-6 sm:flex-row '>
            <div className='mt-4 w-full flex-1 md:mt-0 md:w-1/2'>
              <h1 className='text-xl'>
                <span className='font-semibold'>{header}</span>
                <p className='mt-2'>{body}</p>
              </h1>
            </div>
            <div className='flex w-48 justify-center'>
              <Image src={shieldImg} alt='logo' className='mt-8 w-24' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
