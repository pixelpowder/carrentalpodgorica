import { t, buildAlternates } from '../../../metadata';
import BudvaOldTownWalking from '@/src/components/pages/blog/BudvaOldTownWalking';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogOldtown.title') + ' | Podgorica Car Rental',
    description: t(lang, 'blogOldtown.description'),
    alternates: buildAlternates('blog/budva-old-town-walking', lang),
  };
}

export default function LangBudvaOldTownWalkingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOldtown.title'),
    "description": t('en', 'blogOldtown.description'),
    "image": "https://www.carrentalpodgorica.com/img/blog-budva-old-town-walking.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaOldTownWalking />
    </>
  );
}
