import ContentLayout from '../ContentLayout';

const Geschiedenis = () => {
  return (
    <ContentLayout title='Disciplines'>
      <article className='prose lg:prose-lg'>
        <h3>Disciplines</h3>
        <p>
          Als lid van de vereniging heb je, afhankelijk van je eigen prestaties
          en met goedkeuring van de ballotagecommissie, de mogelijkheid om de
          volgende disciplines te beoefenen:
        </p>
        <ul>
          <li>Luchtgeweer staand/knielend</li>
          <li>Luchtpistool</li>
          <li>Klein Kaliber Pistool</li>
          <li>Klein Kaliber Geweer staand/knielend/liggend</li>
          <li>Klein Kaliber Karabijn staand/knielend/liggend</li>
          <li>Klein Kaliber Semi-automatisch Geweer staand/knielend/liggend</li>
          <li>
            Klein Kaliber Semi-automatisch Karabijn staand/knielend/liggend
          </li>
          <li>Klein Kaliber Vrij Geweer</li>
          <li>Groot Kaliber Pistool</li>
          <li>Groot Kaliber Geweer *</li>
          <li>Militair Pistool</li>
          <li>Service Pistol</li>
          <li>Meesterkaart licht/zwaar</li>
          <li>Militair geweer *</li>
          <li>Precisie Geweer PG100 *</li>
          <li>Dynamic Service Rifle *</li>
          <li>Historisch wapen (alleen Mariette of Colt)</li>
        </ul>
        <p>* op extern gehuurde banen</p>
      </article>
    </ContentLayout>
  );
};

export default Geschiedenis;
