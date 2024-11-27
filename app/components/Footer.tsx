import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import banner from '../../public/img/banner-boekhouding-180x90px.png';
import OpeningTimes from './OpeningTimes';

const Footer = () => {
  return (
    <footer className='container mb-12'>
      <div className='flex flex-col justify-between gap-6 md:flex-row'>
        <div className='flex flex-col'>
          <h3 className='mb-2 text-lg font-medium'>ADRES & CONTACT</h3>
          <p>Voorweg 54a</p>
          <p>2713 RX Zoetermeer</p>
          <p>079 - 3514140</p>
          <a
            href='mailto:info@ssvzoetermeer.nl'
            className='text-blue-600 underline'
          >
            info@ssvzoetermeer.nl
          </a>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-2 text-lg font-medium'>OPENINGSTIJDEN</h3>
          <OpeningTimes />
          <p className='mt-2'>
            Laatste toegang tot de baan: 15 min voor sluiting
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-2 text-lg font-medium'>BELANGRIJKE INFORMATIE</h3>
          <p>
            <Link className='underline' href='/organisatie'>
              Bestuur en Organisatie
            </Link>
          </p>
          <p>
            <Link className='underline' href='/organisatie/waardenmanifest'>
              Waardenmanifest
            </Link>
          </p>
          <p>
            <Link className='underline' href='/organisatie/stukken'>
              Stukken
            </Link>
          </p>
        </div>
        <div>
          <Image src={banner} alt='Wij werken met e-Boekhouder.nl' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
