// components/PageHeader.tsx
import React from 'react';

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className='-mt-12 mb-12 flex w-full items-center justify-center bg-nato-blue py-24 md:py-32 lg:py-40'>
      <h1 className='text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
        {title}
      </h1>
    </header>
  );
};

export default PageHeader;
