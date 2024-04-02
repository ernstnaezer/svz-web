'use client';
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Y',
    memberSince: 2019,
    imageSrc: 'img/testimonials/y.jpg',
    text: (
      <p>
        Ik schiet al sinds dat ik 14 jaar was. Mijn vader was al lid van de
        vereniging, dus ik ging altijd mee met hem. Ik vond het zo interessant
        dat ik het zelf ook wilde proberen en nu ik ben sinds 2019 zelf ook lid
        van de schietvereniging.
        <br />
        <br />
        Ik vind dit een leuke sport omdat het, na een drukke week, een moment
        van rust biedt waarop ik me volledig kan concentreren op mijn houding,
        ademhaling en positie. Je kunt dan alle drukte even achter je laten.
      </p>
    ),
  },
  {
    name: 'John',
    memberSince: 2021,
    imageSrc: 'img/testimonials/john.jpg',
    text: (
      <p>
        Wat me echt aantrekt in de schietsport is de rust en het vermogen om
        alles om me heen even te vergeten. Ik houd van de discipline die elk
        schot vereist. Dankzij de aanmoediging van anderen ben ik gaan deelnemen
        aan wedstrijden en ben ik nu onderdeel van een fantastische groep
        wedstrijdschutters.
        <br />
        <br />
        Ik heb voor onze vereniging gekozen vanwege de warme sfeer in onze
        'huiskamer', die maakt dat ik er vaak ben, of ik nu kom om te schieten
        of om als vrijwilliger te helpen. Grote kans dat je mij tegenkomt als je
        lid wordt.
      </p>
    ),
  },
  {
    name: 'Manisha',
    memberSince: 2023,
    imageSrc: 'img/testimonials/manisha.jpg',
    text: (
      <p>
        Hi! Ik ben Manisha, lid bij SSVZ sinds 2023. Door mijn gedrevenheid,
        zocht ik sport waarbij ik zowel competitie als rust kon vinden. Na drie
        introducties binnen de vereniging was ik verkocht. De kennisdeling die
        op 1 staat, de sfeer onder de schutters en de gezonde competitie maakt
        dat ik drie keer per week op de baan sta.
        <br />
        <br />
        Lijkt de schietsport je interessant? Wees welkom om kennis te maken, met
        de sport maar ook met ons als schutters!
      </p>
    ),
  },
  {
    name: 'Alan',
    memberSince: 2022,
    imageSrc: 'img/testimonials/alan.jpg',
    text: (
      <p>
        Na een drukke werkdag is het erg ontspannen om een serie te schieten. De
        focus, concentratie en beheersing die nodig is om telkens weer het
        midden van de kaart te raken, je beste score willen neerzetten.
        <br />
        <br />
        Soms gaat dat gemakkelijk en lijkt het automatisch te gaan, de andere
        keer is het een “zware” mentale strijd...dat maakt het ook zo leuk en
        uitdagend! En na afloop is het altijd erg gezellig in de kantine!
      </p>
    ),
  },
];

const Testimonials = () => {
  return (
    <>
      {/* <!-- Block overlapping gray and white sections --> */}
      <div className='container relative top-24 z-20 mx-auto -mt-24 flex flex-col justify-center'>
        <div className='w-40'>
          <h2 className='mb-2 text-xl font-bold'>WAT ONZE LEDEN ZEGGEN</h2>
        </div>
        <div className='border border-gray-300 bg-white px-6 py-8'>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className='grid gap-4 md:grid-cols-2 md:px-14'>
                  <div className='col-span-1'>
                    <h1 className='mb-2 text-sm'>
                      {item.name}, lid sinds {item.memberSince}
                    </h1>
                    <div className='text-sm'>{item.text}</div>
                  </div>

                  {/* - Second column - */}
                  <div className='mb-8 md:col-span-1'>
                    <Image
                      src={`/${item.imageSrc}`}
                      alt={item.name}
                      width={1024}
                      height={638}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
