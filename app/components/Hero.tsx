import Link from 'next/link';
import Image from 'next/image';

import heroImg from '../../public/img/hero-1.png';

const Hero = () => {
  return (
    <div className='w-full bg-gradient-to-r from-eastern-blue-600 to-eastern-blue-500'>
      <div className='container flex flex-col items-center md:flex-row'>
        <div className='flex flex-1 items-end justify-end'>
          <Image
            src={heroImg}
            alt='De mensen van de vereniging'
            className='relative bottom-[-14px]'
          />
        </div>
        <div className='flex-1 text-2xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl '>
          <h1 className='font-bold'>Wij zijn</h1>
          <h1 className='ml-4 font-bold lg:mb-4 lg:mt-2'>
            Schietsportvereniging
          </h1>
          <h1 className='font-bold lg:-mt-2'>Zoetermeer</h1>
          <Link href='/lidmaatschap/introductieavond'>
            <button className='btn btn-secondary mb-4 mt-4 !px-6 text-base sm:visible'>
              WORD LID
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
