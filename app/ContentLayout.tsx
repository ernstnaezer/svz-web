import React from 'react';
import NavBar from './components/NavBar';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NavBar darkMode={true} />
      <PageHeader title={title} />

      <div className='container mx-auto flex justify-center '>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <main className='md:col-span-2'>{children}</main>
          <aside className='hidden space-y-4 md:col-span-1 md:block'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>ADRES & CONTACT</h3>
              <p>Voorweg 54a</p>
              <p>2713 RX Zoetermeer</p>
              <p>079 - 3514140</p>
              <a
                href='mailto:info@schietverenigingzoetermeer.nl'
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
          </aside>
        </div>
      </div>
      <div className='mb-6 mt-12 border-t border-gray-300'></div>
      <Footer />
    </>
  );
};

export default ContentLayout;
