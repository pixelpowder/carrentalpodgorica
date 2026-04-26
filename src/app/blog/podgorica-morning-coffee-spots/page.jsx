import { buildAlternates } from '../../metadata';
import PodgoricaMorningCoffeeSpots from '@/src/components/pages/blog/PodgoricaMorningCoffeeSpots';

const TITLE = "Podgorica Morning Coffee, Cafés, Markets and Parking";
const DESC = "A practical guide to mornings in Podgorica: café culture, where to park, where to find burek and the green market, and how to get out of the city on the right road.";

export async function generateMetadata() {
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/podgorica-morning-coffee-spots'),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function PodgoricaMorningCoffeeSpotsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-podgorica-morning-coffee-spots.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaMorningCoffeeSpots />
    </>
  );
}
