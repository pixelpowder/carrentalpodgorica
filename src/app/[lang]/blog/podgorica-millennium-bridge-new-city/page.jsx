import { buildAlternates } from '../../../metadata';
import PodgoricaMillenniumBridgeNewCity from '@/src/components/pages/blog/PodgoricaMillenniumBridgeNewCity';

const TITLE = "The Millennium Bridge and Podgorica's New City";
const DESC = "A walking guide to central Podgorica's modern landmarks: the Millennium Bridge, the Resurrection of Christ cathedral, Republic Square, and where to park.";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/podgorica-millennium-bridge-new-city', lang),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function LangPodgoricaMillenniumBridgeNewCityRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-podgorica-millennium-bridge-new-city.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaMillenniumBridgeNewCity />
    </>
  );
}
