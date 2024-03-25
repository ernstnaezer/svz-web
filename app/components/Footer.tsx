import Link from 'next/link';
import React from 'react';

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
            href='info@schietverenigingzoetermeer.nl'
            className='text-blue-600 underline'
          >
            info@schietverenigingzoetermeer.nl
          </a>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-2 text-lg font-medium'>OPENINGSTIJDEN</h3>
          <p>Maandag 19:30 - 22:30</p>
          <p>Donderdag 19:30 - 22:30</p>
          <p>Vrijdag 19:30 - 23:00</p>
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
      </div>
    </footer>
  );
};

export default Footer;
