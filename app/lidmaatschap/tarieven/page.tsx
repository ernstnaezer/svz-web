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
          prijzen vanaf 2025 zijn als volgt;
        </p>
        <h4>Jeugdleden (14 t/m 17 jaar)</h4>
        <ul>
          <li>Aan de vereniging: €11,- per maand of €120,- per jaar</li>
          <li>Aan de bond (KNSA): €17,- per jaar</li>
        </ul>
        <h4>Leden (18 t/m 20)</h4>
        <ul>
          <li>Aan de vereniging: €20,50- per maand of €230,- per jaar</li>
          <li>Aan de bond (KNSA): €22,- per jaar</li>
        </ul>{' '}
        <h4>Leden (21+)</h4>
        <ul>
          <li>Aan de vereniging: €20,50- per maand of €230,- per jaar</li>
          <li>Aan de bond (KNSA): €42,50 per jaar</li>
        </ul>
        <p>
          Wij hebben een voorkeur voor het betalen van de contributie per jaar,
          omdat dit onze administratie eenvoudiger maakt. Mocht je er toch voor
          kiezen om per maand te betalen, dan vraagt het bestuur je vriendelijk
          om de contributie elke maand in de eerste week over te maken. Je kunt
          dit doen door het bedrag over te schrijven naar onze bankrekening{' '}
          <strong>NL96ABNA 0486607674</strong>. Vergeet niet te vermelden dat
          het om de contributie gaat en voeg ook je naam en/of KNSA-nummer toe,
          zodat we de betaling correct kunnen verwerken.
        </p>
        <h3>Inschrijfkosten</h3>
        <p>
          Als lid word je automatisch aangesloten bij de KNSA (Koninklijke
          Nederlandse Schietsport Associatie), zoals wettelijk vereist is. De
          aanmelding bij de KNSA regelen wij voor jou. Bij inschrijving betaal
          je eenmalig inschrijfkosten, afhankelijk van je leeftijd:
        </p>
        <ul>
          <li>Volwassenen: €125,00</li>
          <li>Jeugdleden (14 t/m 17 jaar): €35,00</li>
        </ul>
        <p>
          Deze kosten dekken onder andere je eerste jaarlijkse bijdrage aan de
          KNSA-licentie, die vervolgens elk jaar in december via onze vereniging
          wordt gefactureerd voor het volgende jaar. Daarnaast vragen we bij
          inschrijving het aanleveren van twee identieke, goed gelijkende
          pasfoto's.
        </p>{' '}
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
        <h3>Gebruik van de Zoetermeer Pas</h3>
        <p>
          De Zoetermeer Pas biedt je een budget voor activiteiten binnen de
          categorie sport, cultuur en educatie. Je kunt dit geld gebruiken om
          (een deel van) je lidmaatschap, het inschrijfgeld, of de
          KNSA-contributie bij onze vereniging te betalen.
        </p>
        <p>
          Bij onze vereniging heb je twee opties om je pas te gebruiken: je kunt
          het jaarbedrag van de pas in één keer gebruiken, of je betaalt 50% van
          het totale bedrag met je pas en de rest zelf.
        </p>
        <p>Hieronder zie je enkele rekenvoorbeelden:</p>
        <p>
          <strong>Eerste jaar (inschrijfgeld en contributie):</strong>
          <br />
          Inschrijfgeld: €125,-
          <br />
          Contributie: €210,-
          <br />
          Betaald met pas: €180,- (in 2024)
          <br />
          Resterend: €155,- (dit mag je maandelijks betalen)
          <br />
        </p>
        <p>
          <strong>Tweede jaar (50% van contributie en KNSA):</strong>
          <br />
          Contributie: €210,0-
          <br />
          KNSA: €42,50
          <br />
          Betaald met pas: €126,25
          <br />
          Resterend: €126,50 (ook dit mag je maandelijks betalen)
          <br />
        </p>
      </article>
    </ContentLayout>
  );
}
