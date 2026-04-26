'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function KomoviMountainsBeraneRoad() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Komovi Mountains, Montenegro's Wild East"
      subtitle="The twin pyramids of Kom Kučki and Kom Vasojevićki above 2,400 m, a long mountain-road day from Podgorica toward Berane"
      description="A driving guide to the Komovi mountains east of Podgorica: the route via Mateševo, the katun summer pastures, and how to reach Eko Katun Štavna by car."
      image="/img/blog-komovi-mountains-berane-road.webp"
    >
      <h2>The two Koms</h2>
      <p>The <strong>Komovi</strong> are a compact mountain massif in eastern Montenegro, between Podgorica and Berane, rising as two near-symmetrical rock pyramids: <strong>Kom Kučki</strong> (2,487 m) and <strong>Kom Vasojevićki</strong> (2,461 m). Between them runs a broad high-altitude saddle of summer pastures called <strong>Štavna</strong>. The massif is far less visited than Durmitor or Prokletije, but it is arguably the most photogenic mid-range in Montenegro — two clean pyramidal peaks rising a kilometre above rolling meadows.</p>

      <h2>The drive from Podgorica</h2>
      <p>Take the main E65 / E80 north out of Podgorica up the <strong>Morača canyon</strong>. This is the new motorway section (the Bar–Boljare A1) combined with the old canyon road and is Montenegro's main north–south axis. After around 70 km you reach <strong>Mateševo</strong>, where you leave the main road east onto the regional route toward <strong>Kolašin</strong> and then onward via <strong>Lijeva Rijeka</strong> or <strong>Andrijevica</strong>.</p>
      <p>There are two main approaches to the Komovi:</p>
      <ul>
        <li><strong>From the south via Lijeva Rijeka</strong>, the more direct but slower route, on smaller mountain roads from Podgorica via the Kuči region. Slow, steep in places, and scenic.</li>
        <li><strong>From the north via Andrijevica</strong>, easier driving on wider roads, through Kolašin. Best for most visitors.</li>
      </ul>
      <p>Total drive time from Podgorica to the Štavna katuns is in the region of 2.5–3 hours via Kolašin/Andrijevica.</p>

      <h2>Eko Katun Štavna and the high meadows</h2>
      <p>The famous scene, wooden shepherds' huts on a high meadow with the Koms rising behind — is at <strong>Eko Katun Štavna</strong> and surrounding katuns on the saddle at around 1,700 m. <em>Katun</em> is the Balkan word for a seasonal mountain settlement — shepherds still come up in summer to pasture sheep and cattle and to make cheese. A number of katuns have been restored as simple guesthouses with food service.</p>
      <p>The final approach road onto the saddle is a rough unsealed track — passable in a normal car in dry conditions, slow but fine. After heavy rain, or if there is any lingering snow in May or early June, take an SUV or don't go. Watch for loose stone and cattle on the track.</p>

      <img src="/img/blog-komovi-mountains-berane-road.webp" alt="Komovi mountains and katun meadows above Štavna" loading="lazy" />

      <h2>Hiking from the katuns</h2>
      <p>Most walkers come for the day hike to the base of Kom Vasojevićki; the full summit is a proper scramble for experienced hillwalkers with the right gear, not a casual walk. A good, easier option is the marked path that circles through the meadows and gives you the classic viewpoint of both peaks from below, 2 to 4 hours, little technical difficulty, but you're at altitude and the weather can change fast. Thunderstorms build on summer afternoons from around 14:00 — start early.</p>

      <h2>Food at the katuns</h2>
      <p>The katun kitchens serve the food of the mountain: <em>kačamak</em> (cornmeal polenta mixed with potato and young cheese), <em>cicvara</em> (a richer cornmeal-and-cheese dish), fresh full-cream cheese, and roast lamb on the longer menus. Portions are large and prices are fair. Coffee is Turkish; there is usually home-made rakija. Don't plan to drive straight after.</p>

      <h2>Onward to Berane</h2>
      <p>If you want a full loop, continue east from Andrijevica to <strong>Berane</strong>, a small town in the Lim valley. Berane is not a tourist destination but it's a functioning Montenegrin town with a decent lunch stop and a different kind of atmosphere to the Adriatic side — wooden-shingle roofs, Orthodox churches, and easy onward access to the Prokletije. Berane to Podgorica via Kolašin is about 2 h 30 min.</p>

      <h2>Season and weather</h2>
      <ul>
        <li><strong>Best season:</strong> late June to late September. The saddle road and the katuns are not open or accessible in winter.</li>
        <li>At 1,700 m, nights are cold even in July — take a fleece. Afternoon thunderstorms are common in July and August.</li>
        <li>In shoulder season (May, October) check locally before driving up — the track may be muddy or snow-blocked.</li>
      </ul>

      <h2>Fuel and distance</h2>
      <p>This is a long day. Plan for around 250–300 km of driving round-trip from Podgorica depending on whether you continue to Berane. Fuel in Podgorica and again in Kolašin — stations become sparse in the mountains.</p>

      <h2>Pair with</h2>
      <p>If the Komovi have lit a fire for mountain driving, pair this with the <a href={localePath('/blog/niksic-beer-lake-loop')}>Nikšić and Ostrog loop</a> on another day for the opposite side of Montenegro's spine. For a calmer day back near the capital, see <a href={localePath('/blog/podgorica-rijeka-crnojevica-drive')}>Pavlova Strana and Rijeka Crnojevića</a>.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Kom Kučki</strong>2,487 m</div>
          <div className="route-info__item"><strong>Kom Vasojevićki</strong>2,461 m</div>
          <div className="route-info__item"><strong>Katun altitude</strong>~1,700 m (Štavna)</div>
          <div className="route-info__item"><strong>Drive from Podgorica</strong>~2.5–3 h</div>
        </div>
      </div>
    </ContentPage>
  );
}
