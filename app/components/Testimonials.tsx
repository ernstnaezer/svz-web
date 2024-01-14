'use client';
import React from 'react';

import ExportedImage from 'next-image-export-optimizer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Anna',
    age: 32,
    memberSince: 219,
    imageSrc: 'img/anna.png',
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
    name: 'Bert',
    age: 32,
    memberSince: 219,
    imageSrc: 'img/anna.png',
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
    name: 'Marco',
    age: 32,
    memberSince: 219,
    imageSrc: 'img/anna.png',
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
    name: 'Henk',
    age: 32,
    memberSince: 219,
    imageSrc: 'img/anna.png',
    text: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        perspiciatis nisi a sequi? Expedita, eligendi excepturi! Iusto ab
        possimus magni? Quasi non consequuntur sunt odit adipisci provident ex!
        Rerum, esse.
      </p>
    ),
  },
];

import { basePath } from '../../next.config';

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
                      {item.name}, {item.age} jaar, lid sinds {item.memberSince}
                    </h1>
                    {item.text}
                  </div>

                  {/* - Second column - */}
                  <div className='relative md:col-span-1'>
                    <ExportedImage
                      src={`${basePath}/${item.imageSrc}`}
                      alt={item.name}
                      width={1023}
                      height={607}
                      placeholder='blur'
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
