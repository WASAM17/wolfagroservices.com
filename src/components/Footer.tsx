import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

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
              Fournisseur structuré à l'origine, spécialisé dans l'export de produits agricoles du Niger.
              Sourcing direct, qualité contrôlée, logistique internationale.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-xs uppercase tracking-widest">Niger</span>
              <span className="w-6 h-px bg-wolf-sand/50"></span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Export mondial</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {[
                ['Accueil', '/'],
                ['À propos', '/about'],
                ['Produits', '/produits'],
                ['Export & Logistique', '/export'],
                ['Qualité', '/qualite'],
                ['Impact & Sourcing', '/impact'],
                ['Galerie', '/galerie'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
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
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Produits</h4>
            <ul className="space-y-3 mb-8">
              {[
                ['Gomme arabique (E414)', '/produits/gomme-arabique'],
                ['Sésame du Niger', '/produits/sesame'],
                ['Oignon violet de Galmi', '/produits/oignon-galmi'],
                ["Graine d'arachide", '/produits/arachide'],
              ].map(([label, href]) => (
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

            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@wolfagroservices.com"
                  className="flex items-start gap-2 text-white/60 text-sm hover:text-wolf-sand transition-colors"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-wolf-sand" />
                  contact@wolfagroservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+22720353509"
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-wolf-sand transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-wolf-sand" />
                  +227 20 35 35 09
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-wolf-sand" />
                Plateau, Niamey, Niger
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {year} Wolf Agro Services. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Sourcing & export de produits agricoles – Niamey, Niger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
