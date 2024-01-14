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
          <li>Luchtgeweer staand/knielend/liggend</li>
          <li>Luchtpistool</li>
          <li>Klein Kaliber geweer staand/knielend</li>
          <li>Klein Kaliber Karabijn Klein</li>
          <li>Kaliber Semi-automatisch Geweer staand/knielend/liggend Klein</li>
          <li>Klein kaliber Vrij Geweer</li>
          <li>Klein Kaliber pistool</li>
          <li>Groot Kaliber geweer *</li>
          <li>Militair geweer *</li>
          <li>Precisie Geweer PG100*</li>
          <li>Groot Kaliber pistool</li>
          <li>Militair pistool</li>
          <li>Service Pistol</li>
          <li>Historisch wapen (alleen Mariette of Colt)</li>
        </ul>
        <p>* op extern gehuurde banen</p>
      </article>
    </ContentLayout>
  );
};

export default Geschiedenis;
