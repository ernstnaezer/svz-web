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
    name: 'Yfke',
    memberSince: 2019,
    imageSrc: 'img/testimonials/yfke.jpg',
    text: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        perspiciatis nisi a sequi? Expedita, eligendi excepturi! Iusto ab
        possimus magni? Quasi non consequuntur sunt odit adipisci provident ex!
        Rerum, esse.
      </p>
    ),
  },
  {
    name: 'John',
    memberSince: 2019,
    imageSrc: 'img/testimonials/john.jpg',
    text: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        perspiciatis nisi a sequi? Expedita, eligendi excepturi! Iusto ab
        possimus magni? Quasi non consequuntur sunt odit adipisci provident ex!
        Rerum, esse.
      </p>
    ),
  },
  {
    name: 'Manisha',
    memberSince: 2019,
    imageSrc: 'img/testimonials/manisha.jpg',
    text: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        perspiciatis nisi a sequi? Expedita, eligendi excepturi! Iusto ab
        possimus magni? Quasi non consequuntur sunt odit adipisci provident ex!
        Rerum, esse.
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
        <div className='ml-1 w-40'>
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
