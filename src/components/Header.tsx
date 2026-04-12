import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation, LOCALE_LABELS, type Locale } from '@/i18n';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, locale, setLocale } = useTranslation();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    {
      label: t.nav.products,
      href: '/produits',
      children: [
        { label: t.nav.gumArabic, href: '/produits/gomme-arabique' },
        { label: t.nav.sesame, href: '/produits/sesame' },
        { label: t.nav.onion, href: '/produits/oignon-galmi' },
        { label: t.nav.peanut, href: '/produits/arachide' },
      ],
    },
    { label: t.nav.export, href: '/export' },
    { label: t.nav.quality, href: '/qualite' },
    { label: t.nav.contact, href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const locales = Object.keys(LOCALE_LABELS) as Locale[];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/lovable-uploads/logo.png"
                alt="Wolf Agro Services"
                className="h-10 md:h-13 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        scrolled
                          ? isActive(link.href)
                            ? 'text-wolf-green'
                            : 'text-wolf-dark hover:text-wolf-green'
                          : isActive(link.href)
                          ? 'text-wolf-sand'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
                      <div className="bg-white shadow-lg border border-gray-100 rounded-lg py-2 w-56">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-wolf-dark hover:bg-wolf-beige hover:text-wolf-green transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      scrolled
                        ? isActive(link.href)
                          ? 'text-wolf-green'
                          : 'text-wolf-dark hover:text-wolf-green'
                        : isActive(link.href)
                        ? 'text-wolf-sand'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Lang + Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded border transition-colors ${
                    scrolled || mobileOpen
                      ? 'border-wolf-beige text-wolf-dark hover:border-wolf-green hover:text-wolf-green'
                      : 'border-white/30 text-white/80 hover:border-white hover:text-white'
                  }`}
                  aria-label="Select language"
                >
                  {LOCALE_LABELS[locale]}
                  <ChevronDown size={11} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1.5 bg-white border border-gray-100 rounded-lg shadow-lg py-1 w-24 z-50">
                    {locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLocale(l); setLangOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                          l === locale
                            ? 'text-wolf-green bg-wolf-beige'
                            : 'text-wolf-dark hover:bg-wolf-beige hover:text-wolf-green'
                        }`}
                      >
                        {LOCALE_LABELS[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/demande-offre"
                className="hidden md:inline-flex items-center bg-wolf-sand text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors hover:bg-wolf-sand/90"
              >
                {t.nav.rfq}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded transition-colors ${
                  scrolled || mobileOpen
                    ? 'text-wolf-dark-green hover:bg-wolf-beige'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
            <div className="max-w-7xl mx-auto px-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`block py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                      isActive(link.href)
                        ? 'text-wolf-green'
                        : 'text-wolf-dark hover:text-wolf-green'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="bg-wolf-cream/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block py-2.5 pl-6 pr-4 text-sm text-wolf-gray hover:text-wolf-green border-b border-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile language selector */}
              <div className="flex items-center gap-2 mt-4 mb-2">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={`text-xs font-semibold px-2.5 py-1.5 rounded border transition-colors ${
                      l === locale
                        ? 'bg-wolf-green text-white border-wolf-green'
                        : 'border-wolf-beige text-wolf-dark hover:border-wolf-green hover:text-wolf-green'
                    }`}
                  >
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
              <Link
                to="/demande-offre"
                className="mt-2 block text-center bg-wolf-green text-white text-sm font-semibold px-4 py-3 rounded transition-colors hover:bg-wolf-dark-green"
              >
                {t.nav.rfq}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full z-40 lg:hidden">
        <Link
          to="/demande-offre"
          className="flex items-center justify-center bg-wolf-green text-white text-sm font-semibold py-4 shadow-lg hover:bg-wolf-dark-green transition-colors"
        >
          {t.nav.mobileRfq}
        </Link>
      </div>
    </>
  );
};

export default Header;
