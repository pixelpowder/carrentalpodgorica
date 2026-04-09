import { t, buildAlternates } from '../../../metadata';
import BudvaNightlifeGuide from '@/src/components/pages/blog/BudvaNightlifeGuide';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogNightlife.title') + ' | Podgorica Car Rental',
    description: t(lang, 'blogNightlife.description'),
    alternates: buildAlternates('blog/budva-nightlife-guide'),
  };
}

export default function LangBudvaNightlifeGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogNightlife.title'),
    "description": t('en', 'blogNightlife.description'),
    "image": "https://www.carrentalpodgorica.com/img/blog-budva-nightlife-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaNightlifeGuide />
    </>
  );
}
