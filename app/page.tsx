'use client';
import FAQ from './components/FAQ';
import IntroductionForm from './components/IntroductionForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Shield from './components/Shield';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import NavBar from './components/NavBar';
import Map from './components/Map';
import Banner from './components/Banner';

const Page = () => {
  return (
    <>
      <NavBar />

      <div className='flex flex-col gap-12'>
        {/* <Banner message='ZomerStop' /> */}
        <Hero />
        <Shield />
        <Stats />
        <Testimonials />
        <div className='relative z-10 bg-white pb-12 pt-24'>
          <div className='container'>
            <FAQ />
          </div>
        </div>
        <div className='-mt-12 flex w-full'>
          <div className='flex w-full flex-col-reverse md:flex-row'>
            <div className='md:w-1/2'>
              <Map />
            </div>
            <div className='bg-nato-blue px-8 py-16 md:w-1/2'>
              <IntroductionForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
