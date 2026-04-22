import { buildAlternates } from '../../metadata';
import PodgoricaRijekaCrnojevicaDrive from '@/src/components/pages/blog/PodgoricaRijekaCrnojevicaDrive';

const TITLE = "Rijeka Crnojevića and the Pavlova Strana Horseshoe Bend";
const DESC = "A driving guide from Podgorica to Pavlova Strana — the famous horseshoe bend above Lake Skadar — and the stone-built village of Rijeka Crnojevića.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/podgorica-rijeka-crnojevica-drive'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function PodgoricaRijekaCrnojevicaDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-podgorica-rijeka-crnojevica-drive.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaRijekaCrnojevicaDrive />
    </>
  );
}
