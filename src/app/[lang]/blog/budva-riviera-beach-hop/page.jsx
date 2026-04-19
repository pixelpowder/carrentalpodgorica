import { t, buildAlternates } from '../../../metadata';
import BudvaRivieraBeachHop from '@/src/components/pages/blog/BudvaRivieraBeachHop';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogBeaches.title') + ' | Podgorica Car Rental',
    description: t(lang, 'blogBeaches.description'),
    alternates: buildAlternates('blog/budva-riviera-beach-hop', lang),
  };
}

export default function LangBudvaRivieraBeachHopRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogBeaches.title'),
    "description": t('en', 'blogBeaches.description'),
    "image": "https://www.carrentalpodgorica.com/img/blog-budva-riviera-beach-hop.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaRivieraBeachHop />
    </>
  );
}
