'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const faqs = [
  {
    question:
      'Is het mogelijk om met een groep een schietevenement te organiseren?',
    answer: (
      <p>
        Helaas, onze schietsportvereniging is exclusief toegankelijk voor leden
        en wij houden ons niet bezig met commerciële evenementen. Onze
        faciliteiten zijn niet beschikbaar voor privéfeesten of
        bedrijfsevenementen.
      </p>
    ),
  },
  {
    question:
      'Kan mijn organisatie of mediagroep een bezoek brengen voor een kennismaking met de schietsport?',
    answer: (
      <p>
        Organisaties zoals scholen, verenigingen of beroepsgroepen, evenals
        leden van de pers die interesse hebben in de schietsport, zijn welkom om
        informatie aan te vragen over de mogelijkheden bij onze vereniging. Wij
        nodigen je uit om via{' '}
        <Link
          className='underline'
          href='mailto:info@schietverenigingzoetermeer.nl'
        >
          e-mail
        </Link>{' '}
        contact met ons op te nemen, liefst met een korte toelichting op je
        interesse of doel van het bezoek. Het bestuur van SVZ zal elke aanvraag
        individueel beoordelen om te kijken hoe we jullie het beste kunnen
        ontvangen en informeren.
      </p>
    ),
  },
  {
    question: 'Wat zijn de kosten om lid te worden van de vereniging?',
    answer: (
      <p>
        De kosten voor het lidmaatschap variëren op basis van leeftijd en
        omvatten ook een jaarlijkse bijdrage aan de KNSA. Voor de exacte
        tarieven en meer details verwijzen we je graag naar onze{' '}
        <Link className='underline' href='/lidmaatschap/tarieven'>
          tarieven pagina
        </Link>
        .
      </p>
    ),
  },
  {
    question: 'Wat kan ik verwachten tijdens de introductieavond?',
    answer: (
      <p>
        De introductie bestaat uit twee avonden, bedoeld voor iedereen die
        overweegt lid te worden (vanaf 14 jaar). Tijdens deze avonden word je
        begeleid door een van onze vrijwilligers. We geven je een rondleiding
        door onze accommodatie en je krijgt de kans om enkele proefschoten te
        doen, eerst met een luchtgeweer en tijdens de tweede avond met een
        luchtpistool. Meer details kan je vinden op{' '}
        <Link className='underline' href='/lidmaatschap/introductieavond'>
          deze pagina
        </Link>
        .
      </p>
    ),
  },
  {
    question: 'Kan ik direct na het lid worden een eigen wapen aanschaffen?',
    answer: (
      <p>
        Je kunt zonder vergunning een luchtwapen aanschaffen. Echter, het bezit
        van vuurwapens in Nederland is onderhevig aan strenge regelgeving. Je
        dient een lange periode lid te zijn van onze vereniging en goedkeuring
        te hebben van het bestuur voordat je een vuurwapen kunt aanschaffen.
      </p>
    ),
  },
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const plus = (
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
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  );

  const minus = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='h-6 w-6'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
    </svg>
  );

  const chat = (
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
        d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
      />
    </svg>
  );

  const arrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='inline h-6 w-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
      />
    </svg>
  );

  return (
    <>
      <h2 className='mb-2 text-xl font-bold'>FAQ</h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='space-y-4 md:col-span-2'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-300 pb-4'>
              <button
                className='flex w-full items-center justify-between text-left'
                onClick={() => toggleFAQ(index)}
              >
                <span className='font-bold md:text-lg'>{faq.question}</span>
                <span>{openFAQ === index ? minus : plus}</span>
              </button>
              {openFAQ === index && <div className='pt-2'>{faq.answer}</div>}
            </div>
          ))}
          {/* <div className='pt-4'>
            <a href='#' className='text-blue-600 flex justify-end font-medium'>
              bekijk alle vragen&nbsp; {arrow}
            </a>
          </div> */}
        </div>
        <div className='rounded-lg bg-gray-100 p-6 shadow-md md:col-span-1'>
          <div className='flex'>
            <div className='flex-shrink-0'>{chat}</div>
            <div className='ml-4 flex-grow'>
              <h3 className='mb-2 text-xl font-bold'>
                STAAT JOUW VRAAG ER NIET BIJ?
              </h3>
              <p className='mb-6'>Neem contact met ons op</p>
              <Link href='/contact#form'>
                <button className='btn btn-secondary px-6 py-2'>CONTACT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
