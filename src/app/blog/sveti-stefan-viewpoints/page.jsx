import { t, buildAlternates } from '../../metadata';
import SvetiStefanViewpoints from '@/src/components/pages/blog/SvetiStefanViewpoints';

export async function generateMetadata() {
  const title = t('en', 'blogStefan.title') + ' | Podgorica Car Rental';
  const description = t('en', 'blogStefan.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/sveti-stefan-viewpoints'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function SvetiStefanViewpointsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogStefan.title'),
    "description": t('en', 'blogStefan.description'),
    "image": "https://www.carrentalpodgorica.com/img/blog-sveti-stefan-viewpoints.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" },
    "publisher": { "@type": "Organization", "name": "Podgorica Car Rental", "url": "https://www.carrentalpodgorica.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SvetiStefanViewpoints />
    </>
  );
}
