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
        <h3>Baandienst - Onderdeel van je lidmaatschap</h3>
        <p>
          Het draaien van baandienst, ongeveer drie keer per jaar, is onderdeel
          van je lidmaatschap.
        </p>
        <p>
          Als baancommandant ben je verantwoordelijk voor het overzicht op de
          schietbanen. Je taak is om toezicht te houden op wie er schiet, met
          welk wapen en op welke baan. Daarnaast zorg je ervoor dat de scores
          correct worden bijgehouden en ingevoerd in het systeem. Je geeft ook
          aan wanneer schietbanen beschikbaar zijn en controleert of schutters
          de juiste bevoegdheden hebben om met specifieke wapens te schieten.
        </p>
        <p>
          Elk kwartaal sturen we de planning voor het baancommando uit, zodat je
          precies weet wanneer je ingeroosterd bent voor dienst. Het is jouw
          taak om op die dag het baancommando te leiden. Mocht je onverhoopt
          niet kunnen, dan ben je zelf verantwoordelijk voor het vinden van een
          vervanger. Indien je een dienst mist zonder vervanging te hebben
          geregeld, volgt er een schriftelijke waarschuwing. Bij een tweede
          afwezigheid zonder vervanger word je een maand geschorst. Een derde
          keer kan leiden tot beëindiging van je lidmaatschap.
        </p>
      </article>
    </ContentLayout>
  );
}
