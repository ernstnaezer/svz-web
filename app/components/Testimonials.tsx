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
        Sinds 2021 lid, maar pas eind 2022 serieus gestart. Ik voel mij
        aangetrokken tot de sport door de rust, het moment dat ik alle stress
        van de dag van me af laat rollen. Tegelijkertijd houd ik ook van de
        discipline die benodigt is voor elk schot. Dankzij aanmoediging doe ik
        nu mee aan wedstrijden en ben ik deel van een fantastische groep
        wedstrijdschutters.
        <br />
        <br />
        Ik kies voor onze vereniging vanwege de sfeer in de 'huiskamer',
        waardoor ik vaak aanwezig ben, of ik nu schiet of als vrijwilliger help.
        Grote kans dat je me ontmoet als je lid wordt.
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
                <div className='grid gap-8 md:grid-cols-2 md:px-14'>
                  <div className='col-span-1'>
                    <h1 className='mb-4 text-xl'>
                      {item.name}, lid sinds {item.memberSince}
                    </h1>
                    {item.text}
                  </div>

                  {/* - Second column - */}
                  <div className='relative md:col-span-1'>
                    <Image
                      src={`/${item.imageSrc}`}
                      alt={item.name}
                      width={1023}
                      height={607}
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
