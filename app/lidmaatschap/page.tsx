import Link from 'next/link';
import ContentLayout from '../ContentLayout';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';

export default function Page() {
  return (
    <ContentLayout title='Lidmaatschap'>
      <article className='prose lg:prose-lg'>
        <h3>Lidmaatschap</h3>
        <p>
          Als je je bij ons aansluit, begin je als aspirant-lid. Deze periode
          van zes maanden, vastgesteld door de KNSA, is een standaard bij alle
          schietsportverenigingen in Nederland. In deze tijd krijg je instructie
          van onze basistrainers om je de grondbeginselen van het sportschieten
          bij te brengen.
        </p>
        <p>
          Onze vereniging is meer dan alleen een plek om te sporten; we zijn een
          levendige gemeenschap waarin iedereen een rol speelt. Als lid draag je
          niet alleen bij aan je eigen sportontwikkeling, maar ook aan het hart
          van onze vereniging. Vrijwilligerswerk, zoals bardiensten, onderhoud,
          en het ondersteunen als trainer, zijn essentieel voor ons voortbestaan
          en de gezellige sfeer.
        </p>
        <p>
          Jouw inzet en betrokkenheid maken onze club tot een hechte en
          gezellige groep sporters. In je eerste zes maanden als aspirant-lid
          verwachten we dat je regelmatig langskomt en toont dat je
          verantwoordelijk en veilig met (lucht)wapens omgaat. Als laatste
          vragen we je een geldige Verklaring Omtrent het Gedrag in te leveren.
          Al deze aspecten vormen samen het pad naar een volwaardig lidmaatschap
          bij onze vereniging.
        </p>
        <p>
          Let op: Als schietsportvereniging dragen wij een grote
          maatschappelijke verantwoordelijkheid. Daarom melden wij gedragingen
          van aspirant-leden, leden en introducees die hiermee in strijd zijn,
          altijd bij Justitie en de KNSA.
        </p>
        <h3>Introductiecursussen</h3>
        <p>
          Voor nieuwe leden worden introductiecursussen van elk 2 uur
          georganiseerd op een andere avond dan de reguliere openingsdagen. Ze
          worden opgevangen door een bestuurslid en diverse trainers en worden
          voorgelicht over de gang van zaken in de vereniging. Vervolgens
          krijgen zij instructie in het omgaan en de veiligheidsaspecten van het
          schieten met wapens.
        </p>
        <p>
          Alle nieuwe leden moeten zich eerst bekwamen met luchtpistool of
          luchtgeweer, alvorens zij toestemming kunnen vragen aan de
          ballotagecommissie voor het schieten met een vuurwapen. Deze
          ballotagecommissie beslist ook of aspirant leden na een periode van 6
          maanden toegelaten worden als volwaardig lid.
        </p>
        <h3>Baandienst</h3>
        <p>
          Een belangrijk aspect van je lidmaatschap is deelname aan de
          baandienst. Dit betekent dat je ongeveer drie keer per jaar bijdraagt
          aan het beheer en toezicht op de schietbanen. Deze cruciale rol zorgt
          voor de veiligheid en een soepel verloop van onze activiteiten.
        </p>
        <h3>Opzegtermijn</h3>
        <p>
          Tot slot willen we je informeren over de opzegtermijn van het
          lidmaatschap bij onze vereniging. Mocht je besluiten om je
          lidmaatschap op te zeggen, houd dan rekening met een opzegtermijn van
          één maand. Deze termijn zorgt ervoor dat wij alles netjes en tijdig
          kunnen afhandelen. We hopen natuurlijk dat je lang bij ons blijft en
          geniet van de sport en de gemeenschap, maar we begrijpen dat
          omstandigheden kunnen veranderen. Zorg ervoor dat je opzegging
          schriftelijk gebeurt, zodat we dit correct kunnen verwerken.
        </p>
        <h3>Tarieven</h3>
        <p>
          Ben je benieuwd naar de kosten van een lidmaatschap bij onze
          vereniging? De tarieven variëren op basis van leeftijd, zodat we voor
          iedereen een passend aanbod hebben. Voor een duidelijk overzicht van
          de inschrijfkosten, onze lidmaatschapstarieven en KNSA bijdrage per
          leeftijdscategorie inhoudt, kan je kijken op op onze{' '}
          <Link href='/lidmaatschap/tarieven'>tarievenpagina</Link>.
        </p>
        <h3>Introductieavond</h3>
        <p>
          Twijfel je nog of lid worden van een schietsportvereniging iets voor
          jou is? Geen probleem! Kom gerust eens langs om kennis te maken en de
          sfeer te proeven. Voor meer informatie over hoe je dit kunt doen, klik{' '}
          <Link href='/lidmaatschap/introductieavond'>hier</Link>.
        </p>
      </article>
    </ContentLayout>
  );
}
