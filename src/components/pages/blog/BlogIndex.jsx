'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid var(--gray-200, #e9ecef)',
  boxShadow: 'var(--shadow-sm)',
  transition: 'box-shadow 0.2s, transform 0.2s',
  display: 'flex',
  flexDirection: 'column',
};

const cardImageStyle = {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  display: 'block',
};

const cardBodyStyle = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: 800,
  color: 'var(--navy, #05203c)',
  lineHeight: 1.3,
  marginBottom: '10px',
};

const cardExcerptStyle = {
  fontSize: '15px',
  color: 'var(--gray-600, #6c757d)',
  lineHeight: 1.65,
  marginBottom: '20px',
  flex: 1,
};

const cardLinkStyle = {
  fontSize: '14px',
  fontWeight: 700,
  color: 'var(--blue, #0770e3)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const articles = [
  {
    href: '/blog/stara-varos-podgorica-ottoman-quarter',
    image: '/img/blog-stara-varos-podgorica-ottoman-quarter.webp',
    title: 'Stara Varoš — Podgorica\'s Ottoman Quarter',
    excerpt: 'The clock tower, the Osmanagić mosque, and the quiet low-rise streets that survived two World Wars when the rest of the city did not.',
  },
  {
    href: '/blog/gorica-hill-walk',
    image: '/img/blog-gorica-hill-walk.webp',
    title: 'Gorica Hill — Podgorica\'s Forest in the City',
    excerpt: 'The wooded hill the capital takes its name from. Trails, the WWII partisan memorial, and a 360° view of the Zeta plain.',
  },
  {
    href: '/blog/podgorica-wineries-plantaze',
    image: '/img/blog-podgorica-wineries-plantaze.webp',
    title: 'Plantaže Wineries — Šipčanik Cellar and the Crmnica Road',
    excerpt: 'Europe\'s largest single vineyard sits on Podgorica\'s doorstep. Tour the former underground aircraft hangar turned wine cellar, then drive south to Crmnica\'s family producers.',
  },
  {
    href: '/blog/niksic-beer-lake-loop',
    image: '/img/blog-niksic-beer-lake-loop.webp',
    title: 'Nikšić, Krupac Lake and Ostrog — a Day Loop',
    excerpt: 'Montenegro\'s second city, the brewery behind Nikšićko pivo, a swim at Krupac Lake, and a late-afternoon climb to Ostrog on the way back.',
  },
  {
    href: '/blog/podgorica-rijeka-crnojevica-drive',
    image: '/img/blog-podgorica-rijeka-crnojevica-drive.webp',
    title: 'Rijeka Crnojevića and the Pavlova Strana Horseshoe Bend',
    excerpt: 'The famous hairpin river viewpoint above Lake Skadar, the stone bridge in the village below, and the old royal capital road from Podgorica.',
  },
  {
    href: '/blog/tuzi-albanian-border-short-hop',
    image: '/img/blog-tuzi-albanian-border-short-hop.webp',
    title: 'Tuzi — The Albanian Border Town South of Podgorica',
    excerpt: 'Fifteen kilometres from the capital and a different world: Malësia mountains on the horizon, Albanian bakeries in the high street, and a short hop to Hani i Hotit crossing.',
  },
  {
    href: '/blog/komovi-mountains-berane-road',
    image: '/img/blog-komovi-mountains-berane-road.webp',
    title: 'The Komovi Mountains — Montenegro\'s Wild East',
    excerpt: 'The twin pyramids of Kom Kučki and Kom Vasojevićki rise above 2,400 m east of Podgorica. A long mountain-road day toward Berane and the katun summer pastures.',
  },
  {
    href: '/blog/podgorica-millennium-bridge-new-city',
    image: '/img/blog-podgorica-millennium-bridge-new-city.webp',
    title: 'The Millennium Bridge and Podgorica\'s New City',
    excerpt: 'The cable-stayed bridge over the Morača, the huge Hristovo Vaskrsenje cathedral, Trg Republike, and where to park when you want to walk all three.',
  },
  {
    href: '/blog/podgorica-morning-coffee-spots',
    image: '/img/blog-podgorica-morning-coffee-spots.webp',
    title: 'Podgorica Morning Coffee — Cafés, Markets and Parking',
    excerpt: 'A practical weekday-morning guide to the capital: where locals drink espresso, where to park without a ticket, and where to pick up burek before a road trip.',
  },
];

export default function BlogIndex() {
  const { localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-podgorica-millennium-bridge-new-city.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>Home</a>
            <span className="breadcrumbs__sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="content-hero__title">Podgorica Driving Guides</h1>
          <p className="content-hero__subtitle">Nine capital-city routes, neighbourhoods and day trips — written from the driver's seat, with real distances, parking notes, and what\u2019s actually worth stopping for.</p>
        </div>
      </div>

      <div style={{
        maxWidth: '1220px',
        margin: '0 auto',
        padding: '48px 24px 80px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {articles.map((article) => (
            <a
              key={article.href}
              href={localePath(article.href)}
              style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={cardImageStyle}
                loading="lazy"
              />
              <div style={cardBodyStyle}>
                <h2 style={cardTitleStyle}>{article.title}</h2>
                <p style={cardExcerptStyle}>{article.excerpt}</p>
                <span style={cardLinkStyle}>Read guide &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
