import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import { products } from '@/data/products';
import { ArrowRight, CheckCircle, Globe, Package, TrendingUp, Shield, Truck, Leaf } from 'lucide-react';
import { useTranslation } from '@/i18n';

// ─── Stats ────────────────────────────────────────────────────────────────────
const Stats = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-wolf-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { value: '800 t', label: t.home.statsExported },
            { value: '10', label: t.home.statsPartners },
            { value: '4', label: t.home.statsProducts },
            { value: 'FOB/CIF', label: t.home.statsLogistics },
          ].map(({ value, label }) => (
            <div key={label} className="py-10 px-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── About Preview ────────────────────────────────────────────────────────────
const AboutPreview = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">{t.home.aboutLabel}</span>
            <h2 className="section-title mb-4">{t.home.aboutTitle}</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6">{t.home.aboutP1}</p>
            <p className="text-wolf-gray leading-relaxed mb-8">{t.home.aboutP2}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {t.home.aboutChecks.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                  <CheckCircle size={15} className="text-wolf-green flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors"
            >
              {t.common.learnMore} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div
              className="h-80 md:h-96 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
            />
            <div className="absolute -bottom-6 -left-6 bg-wolf-sand text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-3xl font-bold">800 t</div>
              <div className="text-sm text-white/80">{t.home.exportedBadge}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Products Preview ─────────────────────────────────────────────────────────
const ProductsPreview = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-wolf-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">{t.home.catalogLabel}</span>
          <h2 className="section-title mb-4">{t.home.catalogTitle}</h2>
          <div className="section-divider mx-auto" />
          <p className="text-wolf-gray max-w-2xl mx-auto mt-4">{t.home.catalogDesc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden h-48">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white/80 text-xs font-medium">{product.subtitle}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-wolf-dark-green text-base mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-wolf-gray text-sm mb-4 leading-relaxed line-clamp-2">
                  {product.heroDesc}
                </p>
                <div className="space-y-1 mb-4">
                  {product.highlights.slice(0, 2).map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-wolf-gray">
                      <div className="w-1 h-1 rounded-full bg-wolf-sand flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/produits/${product.slug}`}
                  className="flex items-center justify-between text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors group/link"
                >
                  {t.common.viewProduct}
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 border-2 border-wolf-green text-wolf-green font-semibold px-6 py-3 rounded hover:bg-wolf-green hover:text-white transition-colors text-sm"
          >
            {t.common.viewFullCatalog} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── Why Us ───────────────────────────────────────────────────────────────────
const WhyUs = () => {
  const { t } = useTranslation();
  const icons = [
    <Package size={22} />,
    <Shield size={22} />,
    <TrendingUp size={22} />,
    <Truck size={22} />,
    <Globe size={22} />,
    <Leaf size={22} />,
  ];
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">{t.home.whyLabel}</span>
          <h2 className="section-title mb-4">{t.home.whyTitle}</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.home.whyItems.map(({ title, desc }, i) => (
            <div key={title} className="p-6 border border-wolf-beige rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-wolf-green/10 text-wolf-green rounded-lg flex items-center justify-center mb-4">
                {icons[i]}
              </div>
              <h3 className="text-wolf-dark-green font-bold text-base mb-2">{title}</h3>
              <p className="text-wolf-gray text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Quality & Logistique Split ───────────────────────────────────────────────
const QualityExport = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-wolf-dark-green py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">{t.home.qualityLabel}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.home.qualityTitle}</h2>
            <p className="text-white/70 mb-6 leading-relaxed">{t.home.qualityP}</p>
            <ul className="space-y-2 mb-8">
              {t.home.qualityChecks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/qualite"
              className="inline-flex items-center gap-2 text-wolf-sand text-sm font-semibold hover:text-white transition-colors"
            >
              {t.common.qualityProcess} <ArrowRight size={15} />
            </Link>
          </div>
          <div>
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">{t.home.exportLabel}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.home.exportTitle}</h2>
            <p className="text-white/70 mb-6 leading-relaxed">{t.home.exportP}</p>
            <ul className="space-y-2 mb-8">
              {t.home.exportChecks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/export"
              className="inline-flex items-center gap-2 text-wolf-sand text-sm font-semibold hover:text-white transition-colors"
            >
              {t.common.exportLogistics} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Impact Section ───────────────────────────────────────────────────────────
const ImpactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-wolf-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="h-72 md:h-96 rounded-lg bg-cover bg-center order-2 lg:order-1"
            style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
          />
          <div className="order-1 lg:order-2">
            <span className="section-label">{t.home.impactLabel}</span>
            <h2 className="section-title mb-4">{t.home.impactTitle}</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6">{t.home.impactP1}</p>
            <p className="text-wolf-gray leading-relaxed mb-8">{t.home.impactP2}</p>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors"
            >
              {t.common.ourApproach} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA Final ────────────────────────────────────────────────────────────────
const CTAFinal = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-label">{t.home.ctaLabel}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-wolf-dark-green mb-4">{t.home.ctaTitle}</h2>
        <p className="text-wolf-gray text-lg mb-10 max-w-2xl mx-auto">{t.home.ctaDesc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/demande-offre"
            className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
          >
            {t.common.requestQuote}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-8 py-4 rounded hover:bg-wolf-green hover:text-white transition-colors"
          >
            {t.common.talkToExport}
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Index = () => (
  <Layout>
    <HeroSlider />
    <Stats />
    <AboutPreview />
    <ProductsPreview />
    <WhyUs />
    <QualityExport />
    <ImpactSection />
    <CTAFinal />
  </Layout>
);

export default Index;
