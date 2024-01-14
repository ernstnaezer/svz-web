import IntroductionForm from '@/app/components/IntroductionForm';
import ContentLayout from '../../ContentLayout';

export default function Page() {
  return (
    <ContentLayout title='Activiteiten'>
      <article className='prose lg:prose-lg'>
        <h3>Activiteiten</h3>
        <p>
          Onze vereniging neemt wat betreft evenementen en wedstrijden een
          vooraanstaande plaats in de Nederlandse schietsport in. Al jaren
          vaardigt de vereniging met succes schutters af naar regionale en
          districtswedstrijden en zelfs Nationale Kampioenschappen. In de
          afgelopen jaren behaalden Zoetermeerse schutters regelmatig een
          Nederlands Kampioenschap en werden meerdere schutters
          Districtskampioen.
        </p>
        <p>
          Voor de leden wordt een aantal interne wedstrijden door uiteenlopende
          voorjaars- en najaarscompetities extra georganiseerd. Een bijzonder en
          voor Nederland uniek evenement is de Marathon. De deelnemende
          schutters moeten 480 schoten in 480 minuten schieten met luchtpistool,
          luchtgeweer of handvuurwapen. Het is een zware fysieke en mentale
          strijd die acht uur in beslag neemt. Binnen deze tijd moeten de
          schutters ook eten, drinken en af en toe even tot rust komen.
        </p>
        <p>
          Voor nieuwe leden wordt er na hun zgn. "Basiscursus Sportschutter" een
          extra trainingsochtend georganiseerd op elke eerste zaterdag van de
          maand. Onder deskundige leiding worden de beginselen van het
          sportschieten nog eens herhaald en maken de aspiranten kennis met de
          diverse takken van schietsport en de daarbij gebruikte wapens. Naast
          theorie wordt vooral veel aandacht besteed aan praktische oefeningen.
        </p>
        <p>
          Ieder jaar wordt op 2e Pinksterdag een open dag georganiseerd. Op deze
          dag mogen inwoners van Zoetermeer kennismaken met deze sport en er
          worden demonstraties met verschillende wapens gehouden. Vooral het
          spectaculaire "Zwart Kruit" (schieten met historische wapens) trekt
          veel aandacht.
        </p>
      </article>
    </ContentLayout>
  );
}
