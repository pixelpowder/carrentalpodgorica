import { buildAlternates } from '../../metadata';
import NiksicBeerLakeLoop from '@/src/components/pages/blog/NiksicBeerLakeLoop';

const TITLE = "Nikšić, Krupac Lake and Ostrog, a Day Loop from Podgorica";
const DESC = "A one-day driving loop from Podgorica: Nikšić old town and brewery, a swim at Krupac lake, and Ostrog Monastery on the return. Distances, parking, and timing.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/niksic-beer-lake-loop'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function NiksicBeerLakeLoopRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-niksic-beer-lake-loop.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <NiksicBeerLakeLoop />
    </>
  );
}
