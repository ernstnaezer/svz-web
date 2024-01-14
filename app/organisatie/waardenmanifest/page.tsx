import Image from 'next/image';
import ContentLayout from '../../ContentLayout';

import shieldImg from '../../../public/img/svz-shield.png';

export default function Page() {
  return (
    <ContentLayout title='Waardenmanifest'>
      <article className='prose lg:prose-lg'>
        <h3>Waardenmanifest</h3>
        <div className='flex justify-center'>
          <Image src={shieldImg} alt='logo' className='w-1/2 md:w-1/4' />
        </div>
        <h4>VEILIGHEID</h4>
        <p>Wij spreken elkaar serieus aan op onveilige situaties.</p>
        <p>
          Wij gebruiken ons gezond verstand bij het beoefenen van onze sport.
        </p>
        <p>Wij voelen ons verantwoordelijk voor elkaars veiligheid.</p>
        <h4>PLEZIER</h4>
        <p>Wij beoefenen onze sport met plezier en stralen trots uit.</p>
        <p>
          Wij zijn ons bewust van onze bijdrage aan het positieve imago van onze
          sport.
        </p>
        <p>Wij zijn samen actief verenigingslid uit verantwoordelijkheid.</p>
        <h4>RESPECT</h4>
        <p>
          Wij geven elkaar - binnen algemeen geldende fatsoensnormen - de ruimte
          om te zijn wie we zijn.
        </p>
        <p>Wij zijn oprecht en gelijkwaardig in ons gedrag.</p>
        <p>Wij behandelen anderen zoals wij zelf behandeld willen worden.</p>
      </article>
    </ContentLayout>
  );
}
