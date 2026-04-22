import { buildAlternates } from '../../metadata';
import KomoviMountainsBeraneRoad from '@/src/components/pages/blog/KomoviMountainsBeraneRoad';

const TITLE = "The Komovi Mountains — Montenegro's Wild East";
const DESC = "A driving guide from Podgorica to the Komovi mountains: the twin pyramid peaks Kom Kučki and Kom Vasojevićki, the Štavna katun meadows, and the road east to Berane.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/komovi-mountains-berane-road'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function KomoviMountainsBeraneRoadRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-komovi-mountains-berane-road.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KomoviMountainsBeraneRoad />
    </>
  );
}
