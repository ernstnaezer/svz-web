import IntroductionForm from '@/app/components/IntroductionForm';
import ContentLayout from '../../ContentLayout';

export default function Page() {
  return (
    <ContentLayout title='Introductieavond'>
      <article className='prose lg:prose-lg'>
        <h3>Introductieavond</h3>
        <p>
          Ben je benieuwd naar de schietsport? Kom dan eens langs op een van
          onze introductieavonden! Voor slechts €25,00 kun je twee avonden
          meedoen en proefschieten onder begeleiding van onze ervaren
          instructeurs. En natuurlijk krijg je van ons een drankje om even te
          ontspannen en kennis te maken met onze leden.
        </p>
        <p>
          Tijdens de introductieavond krijg je niet alleen de kans om te
          schieten met een luchtgeweer, maar ook een rondleiding door onze
          accommodatie. Zo zie je meteen hoe onze leden hun sport beoefenen en
          krijg je een goed beeld van onze vereniging.
        </p>
        <p>
          De minimumleeftijd om deel te nemen is 14 jaar. En vergeet niet, we
          moeten vanwege de wetgeving om je identiteitsbewijs vragen en je
          deelname registreren.
        </p>
        <p>
          Omdat we met een enthousiast team van vrijwilligers werken en een
          beperkt aantal nieuwe deelnemers per avond kunnen ontvangen, vragen we
          je om van tevoren te reserveren. Zo zorgen we ervoor dat iedereen de
          aandacht krijgt die hij of zij verdient. Na twee introductieavonden
          vragen we je om een keuze te maken over een eventueel lidmaatschap.
          Maar geen zorgen, er is geen druk. We willen gewoon dat je een leuke
          en informatieve ervaring hebt!
        </p>
        <p>
          Ben je geïnteresseerd? Vult dan het formulier hieronder in om je aan
          te melden.
        </p>
        <p>
          Let op: De betaling voor de introductieavond doe je via
          bankoverschrijving zodra de datum vaststaat. Eenmaal lid van de
          vereniging, kun je aan de bar verschillende drankjes, hapjes,
          schietkaarten en munitie kopen. Houd er rekening mee dat deze aankopen
          uitsluitend met PIN betaald kunnen worden.
        </p>
        <div>
          <h3>Meld je aan voor een introductieavond</h3>
          <IntroductionForm contentMode={true} />
        </div>
      </article>
    </ContentLayout>
  );
}
