import ContentLayout from '../../ContentLayout';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import PageHeader from '../../components/PageHeader';

export default function Page() {
  return (
    <ContentLayout title='Tarieven'>
      <article className='prose lg:prose-lg'>
        <h3>Tarieven</h3>
        <p>
          De contributie bestaat uit drie delen: de contributie aan de
          vereniging, de contributie aan de bond (KNSA), en de verplichting tot
          het draaien van baandienst als onderdeel van het lidmaatschap. De
          prijzen zijn als volgt;
        </p>
        <h4>Jeugdleden (14 t/m 17 jaar)</h4>
        <ul>
          <li>Aan de vereniging: € 10,- per maand of €110,- per jaar</li>
          <li>Aan de bond (KNSA): € 17,- per jaar</li>
        </ul>
        <h4>Leden (18 t/m 20)</h4>
        <ul>
          <li>Aan de vereniging: € 18,50- per maand of €210,- per jaar</li>
          <li>Aan de bond (KNSA): €22,- per jaar</li>
        </ul>{' '}
        <h4>Leden (21+)</h4>
        <ul>
          <li>Aan de vereniging: € 18,50- per maand of €210,- per jaar</li>
          <li>Aan de bond (KNSA): €42,50 per jaar</li>
        </ul>
        <p>
          Het bestuur vraagt je vriendelijk om de contributie elke maand in de
          eerste week over te maken. Je kunt dit doen door het bedrag over te
          schrijven naar onze bankrekening NL96ABNA 0486607674. Vergeet niet te
          vermelden dat het om de contributie gaat en voeg ook je naam toe,
          zodat we de betaling correct kunnen verwerken.
        </p>
        <h3>Inschrijfkosten</h3>
        <p>
          Als lid word je automatisch aangesloten bij de KNSA (Koninklijke
          Nederlandse Schietsport Associatie), zoals wettelijk vereist is. De
          aanmelding bij de KNSA regelen wij voor jou. Bij je inschrijving
          betaal je eenmalig €125,00 inschrijfkosten. Deze kosten dekken onder
          andere je eerste jaarlijkse bijdrage aan de KNSA-licentie, die
          vervolgens elk jaar in december via onze vereniging wordt gefactureerd
          voor het volgende jaar. Daarnaast vragen we bij inschrijving het
          aanleveren van twee identieke, goed gelijkende pasfoto's.
        </p>
        {/* <h4>Inschrijfkosten Jeugdleden (14 t/m 17 jaar)</h4>
        <ul>
          <li>€17,- voor de KNSA + €10,- contributie voor de eerste maand.</li>
        </ul>
        <h4>Inschrijfkosten leden (18 t/m 20 jaar)</h4>
        <ul>
          <li>€22,- voor de KNSA + €18,50 contributie voor de eerste maand.</li>
        </ul>
        <h4>Inschrijfkosten leden (21+)</h4>
        <ul>
          <li>€85,- voor de KNSA + €18,50 contributie voor de eerste maand.</li>
        </ul> */}
        <h3>Baandienst - Onderdeel van je lidmaatschap</h3>
        <p>
          Als baancommandant tijdens je dienst ben je verantwoordelijk voor het
          overzicht op de schietbanen. Je controleert wie waar en met welk wapen
          schiet, zorgt ervoor dat de scores juist worden geteld en in het
          systeem worden ingevoerd, en geeft de schietbanen vrij. Ook controleer
          je of schutters bevoegd zijn om met een bepaald wapen te schieten.
          Deze rol is cruciaal om alles veilig en ordelijk te laten verlopen.
        </p>
        <p>
          Het draaien van baandienst, ongeveer drie keer per jaar, is een
          essentieel onderdeel van je lidmaatschap. Deze taak is vrijwillig maar
          zeker niet vrijblijvend, en is cruciaal voor het soepele verloop van
          onze activiteiten. Als onderdeel van je contributie draag je direct
          bij aan de veiligheid en organisatie tijdens de schietavonden.
        </p>
        <p>
          Het is jouw verantwoordelijkheid om bij te houden wanneer je aan de
          beurt bent voor baandienst. Mocht je een baandienst missen zonder
          vervanger te hebben geregeld, dan ontvang je een schriftelijke
          waarschuwing. Bij een tweede keer verzuim word je voor één maand
          geschorst, en een derde keer verzuim kan leiden tot uitschrijving als
          lid.
        </p>
      </article>
    </ContentLayout>
  );
}
