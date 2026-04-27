'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { post } from '../../../data/blog/stara-varos-podgorica-ottoman-quarter';

export default function StaraVarosPodgoricaOttomanQuarter() {
  const { localePath } = useTranslation();
  const bodyHtml = post.bodyHtml.replace(/\{\{LP:([^}]+)\}\}/g, (_, p) => localePath(p));
  return (
    <ContentPage
      title={post.title}
      subtitle={post.subtitle}
      description={post.description}
      image={post.image}
    >
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </ContentPage>
  );
}
