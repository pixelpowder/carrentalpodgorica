import { buildAlternates } from '../../../metadata';
import PodgoricaWineriesPlantaze from '@/src/components/pages/blog/PodgoricaWineriesPlantaze';

const TITLE = "Plantaže Wineries — Šipčanik Cellar and the Crmnica Road";
const DESC = "A driving guide to the Plantaže Šipčanik underground cellar and the Crmnica wine region south of Podgorica: where to taste Vranac, how to book, and where to park.";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/podgorica-wineries-plantaze', lang),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function LangPodgoricaWineriesPlantazeRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-podgorica-wineries-plantaze.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaWineriesPlantaze />
    </>
  );
}
