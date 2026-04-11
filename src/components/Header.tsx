import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  {
    label: 'Produits',
    href: '/produits',
    children: [
      { label: 'Gomme arabique', href: '/produits/gomme-arabique' },
      { label: 'Sésame du Niger', href: '/produits/sesame' },
      { label: 'Oignon violet de Galmi', href: '/produits/oignon-galmi' },
      { label: "Graine d'arachide", href: '/produits/arachide' },
    ],
  },
  { label: 'Export & Logistique', href: '/export' },
  { label: 'Qualité', href: '/qualite' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

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

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/demande-offre"
                className="hidden md:inline-flex items-center bg-wolf-sand text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors hover:bg-wolf-sand/90"
              >
                Demander une offre
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
              <Link
                to="/demande-offre"
                className="mt-4 block text-center bg-wolf-green text-white text-sm font-semibold px-4 py-3 rounded transition-colors hover:bg-wolf-dark-green"
              >
                Demander une offre
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
          Demander une offre commerciale
        </Link>
      </div>
    </>
  );
};

export default Header;
