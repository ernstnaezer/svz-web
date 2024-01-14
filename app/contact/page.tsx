'use client';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ModalImage from '../components/ModalImage';

import contactImg1 from '../../public/img/contact/route-1.jpg';
import contactImg2 from '../../public/img/contact/route-2.jpg';
import contactImg3 from '../../public/img/contact/route-3.jpg';
import contactImg4 from '../../public/img/contact/route-4.jpg';
import Link from 'next/link';

const externalLink = (
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
      d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
    />
  </svg>
);

const Page = () => {
  return (
    <>
      <NavBar darkMode={true} />

      <header className='-mt-12 mb-12 flex w-full items-center justify-center bg-nato-blue pt-12'>
        <Map />
      </header>

      <div className='container mx-auto flex justify-center '>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <main className='md:col-span-2'>
            <article className='prose lg:prose-lg'>
              <h3>Contact</h3>
              <p>
                Heb je vragen over de vereniging of onze website? Neem dan
                gerust contact met ons op. Je kunt ons een e-mail sturen naar{' '}
                <Link
                  className='underline'
                  href='mailto:info@schietverenigingzoetermeer.nl'
                >
                  info@schietverenigingzoetermeer.nl
                </Link>{' '}
                of gebruikmaken van het contactformulier onderaan deze pagina.
              </p>
              <h3>Adresgegevens</h3>
              <p>
                Schietsportvereniging Zoetermeer
                <br />
                Voorweg 54a
                <br />
                2713 RX Zoetermeer
              </p>
              <p>Telefoon: 079-3514140</p>
              <p>
                Openingstijden: maandag-, donderdag- en vrijdagavond van 19:30
                tot 23:00 uur
              </p>
              <h3>Route</h3>
              <p>
                Wij bevinden ons in het achtergedeelte van de boerderij aan de
                Voorweg 54. U komt hier door op de Voorweg over het bruggetje
                bij huisnummer 50 te gaan, direct links naast de fietsbrug naar
                Centrum West. Aan het einde van het pad vind u de parkeerplaats
                van Randstadrail-station Centrum West (Betaald parkeren!) waar
                onze accommodatie aan grenst.
              </p>
              <p>
                Wij beschikken over (beperkte) parkeergelegenheid op eigen
                terrein.
              </p>
              <div>
                <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4'>
                  <div className='h-auto max-w-full'>
                    <ModalImage imageUrl={contactImg1} />
                  </div>
                  <div className='h-auto max-w-full'>
                    <ModalImage imageUrl={contactImg2} />
                  </div>
                  <div className='h-auto max-w-full'>
                    <ModalImage imageUrl={contactImg3} />
                  </div>
                  <div className='h-auto max-w-full'>
                    <ModalImage imageUrl={contactImg4} />
                  </div>
                </div>
              </div>
              <h3>Openbaar vervoer</h3>
              <p>
                Onze accommodatie bevindt zich op een ideale locatie, direct
                achter het bus- en Randstadrail-station Centrum West. Hieronder
                vind je de actuele halte tijden voor zowel de bus als de tram.
              </p>
              <ul>
                <li>
                  <Link href='https://9292.nl/zoetermeer/tramhalte-centrum-west'>
                    <div className='flex items-center'>
                      Tramstation Centrum West, Zoetermeer
                      {externalLink}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='https://9292.nl/zoetermeer/bushalte-station-centrum-west'>
                    <div className='flex items-center'>
                      Busstation Station Centrum West, Zoetermeer
                      {externalLink}
                    </div>
                  </Link>
                </li>
              </ul>

              <ContactForm />
            </article>
          </main>
          <aside className='hidden space-y-4 md:col-span-1 md:block'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>ADRES & CONTACT</h3>
              <p>Voorweg 54a</p>
              <p>2713 RX Zoetermeer</p>
              <p>079 - 3514140</p>
              <a
                href='mailto:info@schietverenigingzoetermeer.nl'
                className='text-blue-600'
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
          </aside>
        </div>
      </div>
      <div className='mb-6 mt-12 border-t border-gray-300'></div>
      <Footer />
    </>
  );
};

export default Page;
