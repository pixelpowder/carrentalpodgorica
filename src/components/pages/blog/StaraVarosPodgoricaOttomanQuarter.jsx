'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function StaraVarosPodgoricaOttomanQuarter() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Stara Varoš — Podgorica's Ottoman Quarter"
      subtitle="The clock tower, the Osmanagić mosque, and the low-rise streets that survived when the rest of the city didn't"
      description="A walking guide to Stara Varoš, Podgorica's old Ottoman quarter: the Sahat Kula clock tower, the Osmanagić mosque, the confluence of the Ribnica and Morača, and where to park nearby."
      image="/img/blog-stara-varos-podgorica-ottoman-quarter.webp"
    >
      <h2>The oldest part of a young-looking city</h2>
      <p>Most of Podgorica is modern concrete — the city was flattened by more than seventy Allied air raids between 1943 and 1944, and almost the entire centre was rebuilt in the Yugoslav period. Stara Varoš, the old Ottoman quarter on the north bank of the Ribnica river, is the main exception. Its low houses, crooked lanes, and two surviving mosques are the only substantial pre-war streetscape the capital has left.</p>
      <p>For five centuries Podgorica was an Ottoman frontier town, part of the Scutari (Shkodër) sanjak. The Ottomans took it in 1474 and held it until 1879, when the Congress of Berlin handed it to the Principality of Montenegro. Stara Varoš was the Muslim Ottoman core; the neighbouring district of Drpe preserved the Orthodox houses. Today both are simply residential neighbourhoods, but Stara Varoš still reads as a different kind of place.</p>

      <h2>The Sahat Kula — the clock tower</h2>
      <p>The centrepiece of the quarter is the <strong>Sahat Kula</strong>, a stone clock tower on Becir Bega Osmanagica square. It is 19 metres tall, built in the 17th century by the Osmanagić family, and is one of the oldest surviving structures in the city. The clock face dates from the late 19th century and was brought from Italy. The tower itself is closed to the public, but it sits in a small open square surrounded by cafés — the best place to sit for thirty minutes and look at the stone you came to see.</p>

      <img src="/img/blog-stara-varos-podgorica-ottoman-quarter.webp" alt="Sahat Kula clock tower, Stara Varoš, Podgorica" loading="lazy" />

      <h2>The Osmanagić mosque</h2>
      <p>A hundred metres west of the clock tower stands the <strong>Osmanagić džamija</strong> (Osmanagić Mosque), also 17th-century, endowed by Hadži Mehmed-paša Osmanagić. It is small, whitewashed, and still an active place of prayer — the larger of the two surviving mosques in the city. Dress modestly if you enter, and remove shoes; services take precedence over visits.</p>
      <p>A little further toward the river is the smaller <strong>Starodoganjska mosque</strong>, also Ottoman-era. Both are humble by the standards of Istanbul or Sarajevo — no grand domes, no tall minarets of stone. The Ottoman footprint in Podgorica was always provincial.</p>

      <h2>Ribnica Bridge and the old fortress</h2>
      <p>At the southern edge of Stara Varoš, the Ribnica river runs into the Morača. The <strong>Ribnica bridge</strong> here is a single-arched Ottoman-era stone bridge — short, low, and easy to miss. Next to it, on the wedge of land between the two rivers, lie the ruins of the <strong>Ribnica fortress</strong>. What survives is modest — a few metres of wall, arched vaults, a lot of brambles — but the spot is beautiful, with the Morača in a shallow canyon directly below. The ruined stone arch is the single most-photographed corner of the quarter.</p>
      <p>Tradition holds this as the birthplace of <strong>Stefan Nemanja</strong>, the 12th-century founder of the Serbian Nemanjić dynasty, born here around 1113 when the settlement was called Ribnica. Whether or not that's literally true, the site was continuously fortified from the Roman period through Ottoman times.</p>

      <h2>Walking the streets</h2>
      <p>Stara Varoš is small — you can walk its core in 40 minutes without hurrying. The streets to follow are Marka Miljanova (the spine), Svetozara Markovića, and the lanes running down toward the rivers. The houses are mostly one- and two-storey, some with overhanging upper floors and walled courtyards — a typical Balkan-Ottoman pattern. A few have been restored as cafés and small galleries; many are just lived in.</p>
      <p>Several old <strong>čevabdžinice</strong> (grilled-meat places) and bakeries are here and are a better lunch than anything in the new city. Ćevapi, pljeskavica, burek from a wood oven. Prices are noticeably lower than in the glassy cafés on Hercegovačka.</p>

      <h2>Parking and access</h2>
      <p>The quarter is mostly walkable. Driving in is possible but the lanes are narrow and one-way. Easier options:</p>
      <ul>
        <li><strong>Bulevar Džordža Vašingtona</strong> — the boulevard on the south bank of the Ribnica. Metered street parking, pay at the machine or by SMS. Walk across the footbridge in 2 minutes.</li>
        <li><strong>Delta City and the mall car parks</strong> are too far west — don't use them for Stara Varoš.</li>
        <li><strong>Trg Republike area</strong> — 10-minute walk, more expensive but supervised.</li>
      </ul>
      <p>Zone parking in central Podgorica is paid Monday to Saturday roughly 07:00 to 21:00; Sunday is free in most zones. Rates are modest.</p>

      <h2>When to come</h2>
      <p>Early morning or the hour before sunset. Midday in July and August is brutal here — Podgorica regularly hits 40 °C in summer, and Stara Varoš has almost no shade on its open squares. The clock tower light is best from the east around 08:00 and from the west around 19:00.</p>

      <h2>Pair with</h2>
      <p>A walk in Stara Varoš sits naturally with a loop across the river to the modern city — the <a href={localePath('/blog/podgorica-millennium-bridge-new-city')}>Millennium Bridge and the new cathedral</a> are 15 minutes on foot. If you have the morning free, follow up with <a href={localePath('/blog/gorica-hill-walk')}>Gorica Hill</a> for a view back down over the old quarter.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Clock tower</strong>17th-century, 19 m</div>
          <div className="route-info__item"><strong>Ottoman period</strong>1474–1879</div>
          <div className="route-info__item"><strong>Walk time</strong>40–60 minutes</div>
          <div className="route-info__item"><strong>Best light</strong>Early morning or late afternoon</div>
        </div>
      </div>
    </ContentPage>
  );
}
