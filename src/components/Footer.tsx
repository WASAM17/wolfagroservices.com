import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '@/lib/contact';
import { useTranslation } from '@/i18n';

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const navLinks = [
    [t.nav.home, '/'],
    [t.nav.about, '/about'],
    [t.nav.products, '/produits'],
    [t.nav.export, '/export'],
    [t.nav.quality, '/qualite'],
    ['Impact & Sourcing', '/impact'],
    ['Galerie', '/galerie'],
    [t.nav.esg, '/esg'],
    [t.nav.contact, '/contact'],
  ] as const;

  const productLinks = [
    [t.nav.gumArabic + ' (E414)', '/produits/gomme-arabique'],
    [t.nav.sesame, '/produits/sesame'],
    [t.nav.onion, '/produits/oignon-galmi'],
    [t.nav.peanut, '/produits/arachide'],
  ] as const;

  return (
    <footer className="bg-wolf-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/lovable-uploads/logo.png"
                alt="Wolf Agro Services"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-xs uppercase tracking-widest">{t.footer.origin}</span>
              <span className="w-6 h-px bg-wolf-sand/50"></span>
              <span className="text-white/50 text-xs uppercase tracking-widest">{t.footer.worldwide}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-white/60 text-sm hover:text-wolf-sand transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produits + Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">{t.footer.products}</h4>
            <ul className="space-y-3 mb-8">
              {productLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-white/60 text-sm hover:text-wolf-sand transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-start gap-2 text-white/60 text-sm hover:text-wolf-sand transition-colors"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-wolf-sand" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneLandlineHref}
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-wolf-sand transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-wolf-sand" />
                  {CONTACT.phoneLandline}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneMobileHref}
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-wolf-sand transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-wolf-sand" />
                  {CONTACT.phoneMobile}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-wolf-sand" />
                {CONTACT.address}
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366]/80 text-sm hover:text-[#25D366] transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {year} Wolf Agro Services. {t.footer.rights}
          </p>
          <p className="text-white/30 text-xs">
            {t.footer.subtitle}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
