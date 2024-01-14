'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type NavBarProps = {
  darkMode?: boolean; // Optional prop for dark mode
};

const NavBar: React.FC<NavBarProps> = ({ darkMode = false }) => {
  const navItems = [
    {
      text: 'Lidmaatschap',
      submenu: [
        { text: 'Introductieavond' },
        { text: 'Activiteiten' },
        { text: 'Wapens en uitrusting' },
        { text: 'Tarieven' },
      ],
    },
    { text: 'Disciplines' },
    { text: 'Geschiedenis' },
    {
      text: 'Organisatie',
      submenu: [{ text: 'Stukken' }, { text: 'Waardenmanifest' }],
    },
    { text: 'Contact' },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);

  // Determine text color class based on darkMode prop
  const textColorClass = darkMode ? 'text-gray-100' : 'text-gray-700';
  const bgColorClass = darkMode ? 'bg-nato-blue' : 'bg-white';
  const hoverColorClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200';

  interface MobileLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }

  const MobileLink: React.FC<MobileLinkProps> = ({
    href,
    children,
    className,
  }) => {
    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (typeof window !== 'undefined' && window.location.pathname === href) {
        e.preventDefault();
        setToggleMenu(false); // Close the menu when we've already on this page
      }
      // For different URLs, the default anchor behavior will proceed
    };

    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  };

  const bars = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={`h-6 w-6 ${textColorClass}`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );

  const xmark = (
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
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  );

  const down = (
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
        d='m19.5 8.25-7.5 7.5-7.5-7.5'
      />
    </svg>
  );

  return (
    <nav className={`${bgColorClass} py-3`}>
      <div className='mx-4'>
        <div className='flex items-center gap-4'>
          {/* Logo */}
          <div className='shrink-0 grow'>
            <Link href='/' className={`font-bold ${textColorClass}`}>
              <span>SSV Zoetermeer</span>
            </Link>
          </div>
          {/* primary desktop */}
          <div
            className={`hidden items-baseline justify-evenly lg:flex ${textColorClass} `}
          >
            {navItems.map((item, idx) => (
              <div key={idx} className='group relative whitespace-nowrap'>
                <Link
                  href={`/${item.text.toLowerCase().replaceAll(' ', '-')}`}
                  className={`${textColorClass} ${hoverColorClass} flex items-center px-4 py-2`}
                >
                  {item.text}
                  {/* Render down icon next to items with submenu */}
                  {item.submenu && down}
                </Link>
                {item.submenu && (
                  <div
                    className={`${bgColorClass} absolute z-50 hidden shadow-lg group-hover:block`}
                  >
                    {item.submenu.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={`/${item.text
                          .toLowerCase()
                          .replaceAll(' ', '-')}/${subItem.text
                          .toLowerCase()
                          .replaceAll(' ', '-')}`}
                        className={`${textColorClass} block w-full whitespace-nowrap px-4 py-2 ${hoverColorClass}`}
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* secondary */}
          <div className='self-end'>
            <Link href='/lidmaatschap/introductieavond'>
              <button className='btn btn-secondary whitespace-nowrap px-4 py-2'>
                LID WORDEN
              </button>
            </Link>
          </div>

          {/* Mobile navigation toggle */}
          <div
            className={`z-40 h-[28px] lg:hidden ${toggleMenu ? 'hidden' : ''}`}
          >
            <button onClick={() => setToggleMenu(!toggleMenu)}>{bars}</button>
          </div>

          {/* mobile navigation */}
          <div
            className={`fixed left-0 top-0 z-40 w-full origin-top overflow-hidden bg-nato-blue text-white ${
              !toggleMenu ? 'hidden h-0' : 'show h-full'
            }`}
          >
            {' '}
            <div
              className={`fixed right-4 top-4 z-50 h-[28px] text-nato-blue lg:hidden ${
                toggleMenu ? 'show' : 'hidden'
              }`}
            >
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {xmark}
              </button>
            </div>
            <div className='flex flex-col items-center gap-4 font-bold tracking-wider'>
              <div className='flex w-full justify-center bg-white'>
                <MobileLink
                  href={`/`}
                  className='text-2x bg-white py-4 text-center text-nato-blue'
                >
                  SSV Zoetermeer
                </MobileLink>
              </div>
              {navItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <MobileLink
                    href={`/${item.text.toLowerCase().replaceAll(' ', '-')}`}
                    className='text-2xl'
                  >
                    {item.text}
                  </MobileLink>
                  {item.submenu &&
                    item.submenu.map((subItem, subIdx) => (
                      <MobileLink
                        href={`/${item.text
                          .toLowerCase()
                          .replaceAll(' ', '-')}/${subItem.text
                          .toLowerCase()
                          .replaceAll(' ', '-')}`}
                        key={subIdx}
                        className='text-2xl'
                      >
                        {subItem.text}
                      </MobileLink>
                    ))}
                </React.Fragment>
              ))}
              <MobileLink href='/lidmaatschap/introductieavond'>
                <button className='btn btn-secondary px-8 py-3'>
                  LID WORDEN
                </button>
              </MobileLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
