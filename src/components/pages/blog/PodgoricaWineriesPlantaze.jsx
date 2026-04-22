'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PodgoricaWineriesPlantaze() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Plantaže Wineries — Šipčanik Cellar and the Crmnica Road"
      subtitle="Europe's largest single vineyard sits on Podgorica's doorstep — plus the Crmnica region's family producers a short drive south"
      description="A driving guide to the 13 Jul Plantaže Šipčanik underground cellar and the Crmnica wine region: where to taste, how to book, and where to park."
      image="/img/blog-podgorica-wineries-plantaze.webp"
    >
      <h2>The vineyard you fly over on landing</h2>
      <p>If you arrive at Podgorica Airport (TGD) from the south or west, the flat expanse you cross on final approach is not scrub — it's the <strong>Ćemovsko polje</strong> vineyard of <strong>13 Jul Plantaže</strong>, the state-founded winery that produces the bulk of Montenegro's commercial wine. At around 2,310 hectares in a single continuous block, it's routinely described as the largest single vineyard in Europe, and one of the largest in the world. It sits directly between the airport and the city.</p>
      <p>The backbone of what's grown here is <strong>Vranac</strong>, Montenegro's signature red grape — deep, tannic, dark-fruited — and <strong>Krstač</strong>, a native white. Plantaže also grows Cabernet Sauvignon, Merlot, and Chardonnay on the same plain.</p>

      <h2>The Šipčanik cellar — a former aircraft hangar</h2>
      <p>The visitor highlight is the <strong>Šipčanik cellar</strong>, which sits under a low hill on the edge of the vineyard. Until 1999 this was an underground Yugoslav Air Force hangar, carved 150 m into the hillside. After NATO bombing damage during the Kosovo war, the tunnel was repurposed — it now holds more than two kilometres of oak barrels in a constant cool temperature. The name <em>Šipčanik</em> means <em>place of the rose hip</em>.</p>
      <p>Tours run daily and are bookable in advance through the Plantaže visitor team — they include a walk through the tunnels and a seated tasting of several Vranac and Chardonnay bottlings, typically with a plate of Njeguši prosciutto and local cheese. A full tour takes around 90 minutes. Prices vary by the tasting tier chosen. Book ahead, especially in season; walk-ins are not guaranteed.</p>

      <img src="/img/blog-podgorica-wineries-plantaze.webp" alt="Plantaže Šipčanik cellar and Ćemovsko polje vineyard" loading="lazy" />

      <h2>Getting there from Podgorica</h2>
      <p>The cellar is signed from the main E80 / E762 road between Podgorica and the airport. Drive time from the centre of Podgorica is around 15–20 minutes. From Podgorica Airport itself, under 10 minutes. There is a large free car park at the cellar gate.</p>
      <p>Do not drive after the tasting. If you're the driver, either stick to the one small pour and take the rest in a bottle, or arrange a taxi for the return leg — taxis into town are inexpensive.</p>

      <h2>South into Crmnica — family wineries</h2>
      <p><strong>Crmnica</strong> is a small historic wine region tucked between Lake Skadar and the coastal mountains, about 35–45 km south of Podgorica. This is where Vranac has been grown for centuries on a village scale, and where you'll find the small family <em>podrum</em> (cellars) that pre-date Plantaže by generations. The drive is easy: the E80 south from Podgorica, exit for Virpazar, then small winding roads through Limljani, Sotonići, and Brčeli.</p>
      <p>Several producers in and around Crmnica welcome visitors by appointment — the model is to phone or email a day or two ahead, arrive at the house, taste whatever is in barrel and bottle, buy a few litres if you like it, and leave. Do not turn up unannounced. Ask at your hotel or the tourist office in Virpazar for current contact details; the producers rotate.</p>
      <p>The landscape on the Crmnica drive is worth the trip on its own — olive groves, pomegranate trees, and long views over the south end of Lake Skadar.</p>

      <h2>What to buy</h2>
      <ul>
        <li><strong>Vranac Pro Corde</strong> — Plantaže's flagship oak-aged Vranac. Bold, bramble-and-plum, holds well in bottle.</li>
        <li><strong>Vladika</strong> — Plantaže's barrique-aged premium red. Limited release.</li>
        <li><strong>Krstač</strong> — a dry native white, hard to find outside Montenegro. Worth buying a couple of bottles.</li>
        <li>From Crmnica family producers: unlabelled house Vranac by the litre, often bottled into reused glass. Inexpensive and honest.</li>
      </ul>

      <h2>Driving notes</h2>
      <p>Montenegro's blood-alcohol limit is zero for new drivers (first three years) and 0.3 g/L otherwise. Police checks on the roads around the wine regions are routine. The sensible rule is: one driver stays on water. If you're travelling solo, pick Šipčanik for the tasting and skip the Crmnica drive on the same day.</p>

      <h2>Pair with</h2>
      <p>A Crmnica afternoon pairs naturally with the drive to <a href={localePath('/blog/podgorica-rijeka-crnojevica-drive')}>Rijeka Crnojevića and the Pavlova Strana viewpoint</a> — both sit above Lake Skadar on the same side. For a more urban day, combine Šipčanik with <a href={localePath('/blog/podgorica-millennium-bridge-new-city')}>the Millennium Bridge and the new city</a>.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Vineyard size</strong>~2,310 ha (single block)</div>
          <div className="route-info__item"><strong>Šipčanik tunnel</strong>Former military hangar, 150 m deep</div>
          <div className="route-info__item"><strong>Tour length</strong>~90 minutes</div>
          <div className="route-info__item"><strong>Crmnica drive</strong>35–45 km south</div>
        </div>
      </div>
    </ContentPage>
  );
}
