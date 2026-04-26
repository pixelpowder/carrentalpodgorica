import { buildAlternates } from '../../metadata';
import GoricaHillWalk from '@/src/components/pages/blog/GoricaHillWalk';

const TITLE = "Gorica Hill, Podgorica's Forest in the City";
const DESC = "A walking guide to Gorica Hill in central Podgorica: trails, the WWII partisan memorial, the church of St George, and where to park at the trailhead.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/gorica-hill-walk'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function GoricaHillWalkRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-gorica-hill-walk.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <GoricaHillWalk />
    </>
  );
}
