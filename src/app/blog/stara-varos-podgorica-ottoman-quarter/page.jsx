import { buildAlternates } from '../../metadata';
import StaraVarosPodgoricaOttomanQuarter from '@/src/components/pages/blog/StaraVarosPodgoricaOttomanQuarter';

const TITLE = "Stara Varoš, Podgorica's Ottoman Quarter";
const DESC = "A walking guide to Stara Varoš: the Sahat Kula clock tower, the Osmanagić mosque, the Ribnica bridge, and where to park in Podgorica's old Ottoman quarter.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/stara-varos-podgorica-ottoman-quarter'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function StaraVarosPodgoricaOttomanQuarterRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-stara-varos-podgorica-ottoman-quarter.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <StaraVarosPodgoricaOttomanQuarter />
    </>
  );
}
