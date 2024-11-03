import React from 'react';
import OpeningTimes from './OpeningTimes';

const Stats: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='flex justify-evenly'>
          {/* - Leden, Banen, Disciplines - */}
          <div className='grid grid-cols-3 gap-x-4 md:w-3/4'>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg'>Leden</h1>
              <p className='text-2xl'>140</p>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg'>Banen</h1>
              <p className='text-2xl'>19</p>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg'>Disciplines</h1>
              <p className='text-2xl'>17</p>
            </div>
          </div>
          {/* - Openings tijden, on desktop part of the stats block - */}
          <div className='hidden md:block'>
            <div className='mb-4 flex flex-col items-center md:items-start'>
              <h1 className='text-lg'>Openingstijden</h1>
              <OpeningTimes />
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg'>Baantijden</h1>
              <OpeningTimes baantijden={true} />
              <p className='mt-2 text-sm'>
                Laatste toegang: 30 min voor baansluiting
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* - Openings tijden, on mobile part of the overall rows - */}
      <div className='container md:hidden'>
        <div>
          <div className='mb-2'>
            <h1 className='text-lg'>Openingstijden</h1>
            <OpeningTimes />
          </div>
          <div>
            <h1 className='text-lg'>Baantijden</h1>
            <OpeningTimes baantijden={true} />
            <p className='mt-2 text-sm'>
              Laatste toegang: 30 min voor baansluiting
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
