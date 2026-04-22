'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaMillenniumBridgeNewCity() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Millennium Bridge and Podgorica's New City"
      subtitle="The cable-stayed bridge over the Morača, the cathedral of Hristovo Vaskrsenje, Trg Republike, and where to park to see all three"
      description="A walking guide to central Podgorica's modern landmarks: the Millennium Bridge, the Resurrection of Christ cathedral, Republic Square, and the surrounding new city."
      image="/img/blog-podgorica-millennium-bridge-new-city.webp"
    >
      <h2>The modern capital in a single afternoon</h2>
      <p>Podgorica was bombed to ruins in 1943–44 and rebuilt almost from scratch in the Yugoslav period. What you see south of the Ribnica today is a post-war socialist grid overlaid with post-2000 office buildings, malls and new landmarks. This walk ties together the three set-pieces of that newer city — the Millennium Bridge, the Resurrection of Christ cathedral, and Republic Square — in an easy afternoon of about 4 km.</p>

      <h2>The Millennium Bridge</h2>
      <p>The <strong>Millennium Bridge</strong> (<em>Most Milenijum</em>) spans the Morača river in the centre of the city. It was completed in 2005 and was, at the time, by far the largest infrastructure project in independent Montenegro (independence came in 2006). It is a cable-stayed design with a single 57-metre pylon inclined over the river; the main span is 140 metres and the total length is 173 metres. The cables rise at a steep angle from the bridge deck to a single point at the top of the pylon — the shape that makes the bridge immediately recognisable from every photograph of the city.</p>
      <p>You can walk it. There are pavements on both sides. The footpath on the north side gives the better view of the cathedral to the east.</p>

      <img src="/img/blog-podgorica-millennium-bridge-new-city.webp" alt="Millennium Bridge over the Morača river, Podgorica" loading="lazy" />

      <h2>Hristovo Vaskrsenje — the new cathedral</h2>
      <p>A ten-minute walk east of the bridge stands the <strong>Cathedral of the Resurrection of Christ</strong> (<em>Saborni hram Hristovog Vaskrsenja</em>). It is enormous — the largest Orthodox church in Montenegro — and was formally consecrated in 2013 after more than twenty years of construction. The exterior is clad in white stone and crowned with a large central dome flanked by smaller ones; the interior is finished with bright frescoes covering most of the walls and vaults, painted in the traditional Orthodox style.</p>
      <p>Entry is free. Modest dress (covered shoulders and knees) is required. Women are usually asked to cover their hair; scarves are available at the entrance. Photography is restricted during services. Allow 20–30 minutes inside.</p>

      <h2>Trg Republike — Republic Square</h2>
      <p>From the cathedral it's a 10–15 minute walk back west across the Morača to <strong>Trg Republike</strong>, Podgorica's main central square. It was remodelled in 2014 with a large open paved plaza, fountains, and wide low steps. This is where public events and concerts happen. On summer evenings it fills with children running through the fountains and locals walking the <em>korzo</em> (evening promenade).</p>
      <p>Around the square you get a compressed view of post-war Podgorica: ministry buildings, banks, the municipality offices, a glassy shopping centre, and the high-rise <strong>Hilton Podgorica Crna Gora</strong> on one corner (the building is Yugoslav-era; the hotel brand is newer).</p>

      <h2>Along Hercegovačka — the café street</h2>
      <p>Just off Trg Republike, <strong>Hercegovačka</strong> is the pedestrian café street. This is where most of the busier terraces are — espresso at any time of day, wine and cocktails in the evening. It's essentially where Podgorica sits for the second half of every day. Prices are lower than the Adriatic coast, quality is similar.</p>

      <h2>Parking for the walk</h2>
      <ul>
        <li><strong>Trg Republike underground car park</strong> — central, paid, supervised. The convenient option.</li>
        <li><strong>Around the Delta City mall</strong> (across the river, west) — free if you validate a small purchase, 15-minute walk to the bridge.</li>
        <li><strong>Street zone parking</strong> around the new-city grid — paid Monday to Saturday via meter or SMS, free Sunday. Don't ignore the zone signs; ticketing is active.</li>
      </ul>

      <h2>When to come</h2>
      <p>The cathedral is most atmospheric at the end of afternoon light. The Millennium Bridge is lit at night and is worth a second look after dark. Midday in midsummer is punishing — the new city has almost no shade, so plan café stops into the itinerary if you're walking in July or August.</p>

      <h2>Is there more?</h2>
      <p>Near the cathedral is the <strong>Natural History Museum</strong> and Moraca riverbank park; south of the bridge along the river there are pleasant walking paths and playgrounds; north of Trg Republike you can walk up into <strong>Blok V</strong>, a classic piece of Yugoslav-modernist housing that architecturally-minded visitors tend to enjoy.</p>

      <h2>Pair with</h2>
      <p>The natural pairing is <a href={localePath('/blog/stara-varos-podgorica-ottoman-quarter')}>Stara Varoš</a> — the historic Ottoman quarter is directly across the Ribnica from the new city, and the two together give you a complete picture of the capital. For a full day, follow up with <a href={localePath('/blog/gorica-hill-walk')}>Gorica Hill</a> for a view down over both districts.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Bridge completed</strong>2005</div>
          <div className="route-info__item"><strong>Main span</strong>140 m; pylon 57 m</div>
          <div className="route-info__item"><strong>Cathedral consecrated</strong>2013</div>
          <div className="route-info__item"><strong>Walk loop</strong>~4 km</div>
        </div>
      </div>
    </ContentPage>
  );
}
