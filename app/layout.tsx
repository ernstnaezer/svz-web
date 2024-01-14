import '../styles/globals.css';

import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='nl'>
      <head>
        <title>SSV Zoetermeer</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta property='og:image' content='<generated>' />
        <meta
          property='og:image:alt'
          content='Ontdek de wereld van de schietsport bij Schietsport Vereniging Zoetermeer: Een gemeenschap waar sport, gezelligheid en veiligheid centraal staan.'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />{' '}
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} bg-timeless`}>
        {children}
      </body>
    </html>
  );
}
