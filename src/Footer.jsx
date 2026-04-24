'use client';
import { MapPin, Mail } from 'lucide-react';
import config from './siteConfig';
import useTranslation from './i18n/useTranslation';
import './App.css';

const FOOTER_FLEET_SLUGS = ['vw-polo', 'skoda-octavia', 'toyota-corolla', 'mercedes-c-class', 'jeep-renegade'];

export default function Footer() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };

  const fleetLinks = FOOTER_FLEET_SLUGS
    .map(slug => {
      const car = config.cars.find(c => c.slug === slug);
      if (!car) return null;
      const name = tf(`cars.${slug}.name`, car.name);
      return { slug, name };
    })
    .filter(Boolean);

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-logo">
            <span className="footer__brand-name">{config.name}</span>
          </div>
          <p className="footer__brand-desc">{t('footer.brandDesc')}</p>
          <div className="footer__contact-list">
            <a href={`mailto:${config.email}`} className="footer__contact-item">
              <Mail size={13} /> {config.email}
            </a>
            <div className="footer__contact-item">
              <MapPin size={13} /> {config.address}
            </div>
          </div>
        </div>

        <div className="footer__col--hide-mobile">
          <div className="footer__col-title">{tf('footer.quickLinks', 'Quick Links')}</div>
          <div className="footer__links">
            <a href={localePath('/book')} className="footer__link">{tf('footer.carHireBooking', 'Car Hire Booking')}</a>
            <a href={localePath('/cars')} className="footer__link">{tf('footer.ourFleet', 'Our Fleet')}</a>
            <a href={localePath('/about')} className="footer__link">{tf('footer.aboutUs', 'About Us')}</a>
            <a href={localePath('/#faq')} className="footer__link">{tf('footer.faqLink', 'FAQ')}</a>
          </div>
        </div>

        <div>
          <div className="footer__col-title">{tf('footer.ourFleet', 'Our Fleet')}</div>
          <div className="footer__links">
            {fleetLinks.map(car => (
              <a key={car.slug} href={localePath(`/cars/${car.slug}`)} className="footer__link">
                {car.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer__col-title">Capital Guides</div>
          <div className="footer__links">
            <a href={localePath('/blog')} className="footer__link">Blog</a>
            <a href={localePath('/blog/gorica-hill-walk')} className="footer__link">Gorica Hill</a>
            <a href={localePath('/blog/stara-varos-podgorica-ottoman-quarter')} className="footer__link">Stara Varoš</a>
            <a href={localePath('/blog/podgorica-millennium-bridge-new-city')} className="footer__link">Millennium Bridge</a>
          </div>
        </div>

        <div>
          <div className="footer__col-title">Day Trips from Podgorica</div>
          <div className="footer__links">
            <a href={localePath('/blog/podgorica-wineries-plantaze')} className="footer__link">Plantaže Wineries</a>
            <a href={localePath('/blog/niksic-beer-lake-loop')} className="footer__link">Nikšić & Ostrog</a>
            <a href={localePath('/blog/podgorica-rijeka-crnojevica-drive')} className="footer__link">Rijeka Crnojevića</a>
            <a href={localePath('/blog/tuzi-albanian-border-short-hop')} className="footer__link">Tuzi Border</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
        </span>
        <div className="footer__bottom-links">
          <a href={localePath('/privacy')} className="footer__bottom-link">{t('footer.privacyPolicy')}</a>
          <a href={localePath('/terms')} className="footer__bottom-link">{t('footer.terms')}</a>
          <a href={localePath('/cookie-policy')} className="footer__bottom-link">{t('footer.cookiePolicy')}</a>
          <a href="/sitemap.xml" className="footer__bottom-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
