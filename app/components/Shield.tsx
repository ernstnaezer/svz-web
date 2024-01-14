import ExportedImage from 'next-image-export-optimizer';

import shieldImg from '../../public/img/svz-shield.png';

const Shield = () => {
  return (
    <div className='container tracking-wider md:w-9/12'>
      <div className='grid grid-flow-row gap-8 md:grid-flow-col md:gap-2'>
        {/* - First column - */}
        <div className='grid grid-flow-col md:grid-flow-row'>
          <p className='font-medium md:ml-2 md:w-3/4'>
            Kom gezellig langs en verbeter je vaardigheden. Elke week op
            maandag, donderdag en vrijdag!
          </p>
          <ExportedImage src={shieldImg} alt='logo' className='w-1/2' />
        </div>

        {/* - Second column - */}
        <div>
          <p>
            Bij onze sfeervolle schietsportvereniging, gehuisvest in een
            charmante oude boerderij, hebben we iets voor iedereen. Onze
            ongeveer 140 enthousiaste leden schieten in alle verschillende
            schietdisciplines - van luchtpistool en luchtgeweer tot klein en
            groot kaliber vuurwapens. Of je nu voor de lol schiet of je
            voorbereidt op een wedstrijd, bij ons vind je de perfecte mix van
            serieuze sport en ontspannen gezelligheid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shield;
