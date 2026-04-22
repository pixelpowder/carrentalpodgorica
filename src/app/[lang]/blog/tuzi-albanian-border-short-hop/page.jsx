import { buildAlternates } from '../../../metadata';
import TuziAlbanianBorderShortHop from '@/src/components/pages/blog/TuziAlbanianBorderShortHop';

const TITLE = "Tuzi — The Albanian Border Town South of Podgorica";
const DESC = "A driving guide to Tuzi, the Albanian-majority town south of Podgorica: what to see, what to eat, and how to continue to the Hani i Hotit border crossing for Shkodër.";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: TITLE + ' | Car Rental Podgorica',
    description: DESC,
    alternates: buildAlternates('blog/tuzi-albanian-border-short-hop', lang),
    openGraph: { title: TITLE, description: DESC, type: 'website' },
  };
}

export default function LangTuziAlbanianBorderShortHopRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "image": "https://www.carrentalpodgorica.com/img/blog-tuzi-albanian-border-short-hop.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Podgorica", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TuziAlbanianBorderShortHop />
    </>
  );
}
