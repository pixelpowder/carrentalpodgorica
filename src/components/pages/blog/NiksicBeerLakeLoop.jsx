'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function NiksicBeerLakeLoop() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Nikšić, Krupac Lake and Ostrog — a Day Loop from Podgorica"
      subtitle="Montenegro's second city, the brewery behind Nikšićko pivo, a swim at Krupac, and Ostrog on the drive back"
      description="A practical one-day driving loop from Podgorica: Nikšić old town and brewery, a swim at Krupac lake, and Ostrog Monastery on the return. Distances, parking, and timing."
      image="/img/blog-niksic-beer-lake-loop.webp"
    >
      <h2>The shape of the day</h2>
      <p>This is an easy loop from the capital — about 160 km in total with no mountain passes above 700 m. Allow 8–10 hours if you want time to swim and to queue (briefly) for Ostrog in high season. The route: Podgorica → Nikšić (~55 km, 1 hour) → Krupac Lake (15 minutes from Nikšić) → Ostrog Monastery (~35 km from the lake) → Podgorica (~50 km).</p>

      <h2>Podgorica to Nikšić</h2>
      <p>The M18 main road heads north-west out of the capital through the Bjelopavlići plain. It is mostly flat, two-lane, with a few short overtaking sections. Traffic thins quickly past Danilovgrad. Fuel at any of the stations on the outskirts of Podgorica before you leave — prices are identical across the country but stations become sparser on the mountain roads north of Nikšić.</p>

      <h2>Nikšić — Montenegro's second city</h2>
      <p><strong>Nikšić</strong> sits on an open karst plateau ringed by mountains. It's Montenegro's second-largest city by population after Podgorica and is usually skipped by tourists, which is exactly why it's worth two or three hours. The old core is compact: walk the pedestrianised <strong>Njegoševa</strong> street, which runs past cafés and old trader houses, and look at the <strong>Cathedral of St Basil of Ostrog</strong> (Saborni hram Svetog Vasilija Ostroškog) — the big white stone cathedral on the hill above the city, completed in 1900 on the orders of King Nikola I, the only king of independent Montenegro. The cathedral is open outside service hours; modest dress, no photos during liturgy.</p>
      <p>Below the cathedral on the south side sits <strong>Trebjesa park</strong> and <strong>Bedem fortress</strong>, the Ottoman-era stone fort that was the military core of the old town. Bedem has been partly restored and hosts summer concerts; walk-through is free most of the year.</p>

      <h2>The brewery — Nikšićko pivo</h2>
      <p><strong>Trebjesa brewery</strong> has made <em>Nikšićko pivo</em> since 1896 — by far the most drunk lager in Montenegro, now owned by Molson Coors. The brewery is in the city itself, recognisable by the large red industrial buildings near the river. They do not run public tours the way small craft breweries do, but the brewery restaurant, <em>Kafana Nikšićko</em>, is the place to sit with a cold half-litre and a plate of local grilled food. The lager is what you'll have seen in every kafana in Montenegro — pale, clean, unambitious, and very well suited to 38 °C afternoons.</p>

      <img src="/img/blog-niksic-beer-lake-loop.webp" alt="Krupac lake near Nikšić, Montenegro" loading="lazy" />

      <h2>Krupac Lake — the swim</h2>
      <p><strong>Krupac</strong> is an artificial reservoir on the Nikšić plateau, around 7 km east of the city. In summer it's one of Montenegro's most popular freshwater swimming spots — pebble and grass beaches, a handful of cafés, rental sunbeds and pedal boats, very few non-Montenegrin visitors. The water is cool even in August (you're at about 620 m altitude) and clear. Parking is in free gravel lots near the main bay; get there by 11:00 on a July weekend if you want a space near the water.</p>
      <p>Next door, smaller, and quieter, is <strong>Slano Lake</strong> — also worth a stop if Krupac is busy. Both are reservoirs built for hydropower, but they look and feel natural now.</p>

      <h2>Ostrog Monastery on the way back</h2>
      <p>From the lakes, drop back to Nikšić and pick up the E80/M18 back toward Podgorica. About 35 km along, signs point left up the mountain to <strong>Manastir Ostrog</strong>. This is Montenegro's most important Orthodox pilgrimage site — a whitewashed monastery built into a sheer cliff face in the 17th century, around the relics of Saint Basil of Ostrog (Sveti Vasilije). It is visited by hundreds of thousands of pilgrims a year from across the Orthodox world.</p>
      <p>The road up to the upper monastery is narrow, steep, and switchbacks hard — manageable in any car, but take it slowly and expect oncoming traffic on blind corners. There is a lower monastery (<em>Donji manastir</em>) with a larger car park; pilgrims traditionally walk the final 3 km up from there, but most visitors drive. Dress is modest and strictly enforced — covered shoulders and knees. No photography inside the rock-cut upper chapel.</p>
      <p>Allow 60–90 minutes at Ostrog. Come late afternoon: by 16:00 the tour coaches have usually left and the light on the cliffs turns gold.</p>

      <h2>Back to Podgorica</h2>
      <p>From Ostrog, the return is ~50 km, mostly on the Bjelopavlići plain again. Allow an hour with the descent from the monastery. You should be back in the capital before dark even in winter.</p>

      <h2>Practical notes</h2>
      <ul>
        <li>Total driving: around 160 km. Comfortable in any of our economy or mid-size vehicles — no 4x4 needed.</li>
        <li>Fuel up in Podgorica or Nikšić. Avoid the small-village stations unless urgent.</li>
        <li>Swim kit in the boot; towels dry quickly on the car seats in summer heat.</li>
        <li>Zero-alcohol rule for drivers — appoint one person if the brewery stop appeals.</li>
      </ul>

      <h2>Pair with</h2>
      <p>If you have a second day, head east from Nikšić into the wilder country — see the <a href={localePath('/blog/komovi-mountains-berane-road')}>Komovi Mountains day</a>. For a more city-centred trip, the <a href={localePath('/blog/podgorica-wineries-plantaze')}>Plantaže wineries</a> are closer and quicker.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Total loop</strong>~160 km</div>
          <div className="route-info__item"><strong>Time needed</strong>8–10 hours</div>
          <div className="route-info__item"><strong>Krupac altitude</strong>~620 m</div>
          <div className="route-info__item"><strong>Ostrog road</strong>Narrow, slow, manageable</div>
        </div>
      </div>
    </ContentPage>
  );
}
