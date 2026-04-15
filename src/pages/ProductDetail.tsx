import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { getLocalizedProductBySlug, getLocalizedProductById, getLocalizedProducts } from '@/data/products-i18n';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/i18n';

const ProductDetail = () => {
  const { t, locale } = useTranslation();
  const pd = t.productDetail;
  const { id, slug } = useParams<{ id?: string; slug?: string }>();

  // Support both /produits/:slug and legacy /product/:id
  const product = slug
    ? getLocalizedProductBySlug(slug, locale)
    : getLocalizedProductById(id || '', locale);

  if (!product) {
    // Try legacy id match
    const legacyProduct = products.find((p) => p.id === (slug || id));
    if (legacyProduct) {
      return <Navigate to={`/produits/${legacyProduct.slug}`} replace />;
    }
    return <Navigate to="/produits" replace />;
  }

  const otherProducts = getLocalizedProducts(locale).filter((p) => p.id !== product.id);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wolf-dark-green/90 via-wolf-dark-green/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 text-white/70 text-sm mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> {pd.backLink}
          </Link>
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-3 block">
            {product.subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">{product.heroTagline}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {product.highlights.map((h) => (
              <span key={h} className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-full">
                {h}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/demande-offre"
              className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-6 py-3 rounded hover:bg-wolf-sand/90 transition-colors text-sm"
            >
              {pd.requestOffer}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-6 py-3 rounded hover:border-white transition-colors text-sm"
            >
              {pd.requestDatasheet}
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{pd.presentationLabel}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">{pd.positioningTitle}</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6">{product.positioning}</p>
            <ul className="space-y-2">
              {product.positioningPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-wolf-dark text-sm">
                  <CheckCircle size={15} className="text-wolf-green flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specs + Usage */}
      <section className="py-16 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="section-label">{pd.specsLabel}</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-6">{pd.specsTitle}</h2>
              <div className="bg-white rounded-lg overflow-hidden border border-wolf-beige">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between py-3 px-5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-wolf-cream'}`}
                  >
                    <span className="text-wolf-gray font-medium">{spec.label}</span>
                    <span className="text-wolf-dark-green font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">{pd.applicationsLabel}</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-6">{pd.applicationsTitle}</h2>
              <div className="space-y-3">
                {product.usages.map((u) => (
                  <div
                    key={u}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg border border-wolf-beige"
                  >
                    <div className="w-2 h-2 rounded-full bg-wolf-sand flex-shrink-0" />
                    <span className="text-wolf-dark text-sm font-medium">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity + Availability */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="section-label">{pd.volumesLabel}</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-2">{pd.capacityTitle}</h2>
              <div className="text-wolf-sand font-semibold mb-4">{product.availability}</div>
              <div className="section-divider" />
              <ul className="space-y-2 mt-4">
                {product.capacityPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-wolf-dark text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-wolf-green flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="section-label">{pd.qualityLabel}</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-4">{pd.qualityTitle}</h2>
              <div className="section-divider" />
              <p className="text-wolf-gray text-sm mb-4 mt-4">{product.qualityDesc}</p>
              <ul className="space-y-2">
                {product.qualityPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-wolf-dark text-sm">
                    <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistique */}
      <section className="py-16 bg-wolf-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
                {pd.logisticsLabel}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{pd.logisticsTitle}</h2>
              <div className="text-wolf-sand font-semibold mb-6">{product.logistique}</div>
              <ul className="space-y-2 mb-8">
                {product.logistiquePoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              {product.markets && (
                <>
                  <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-3 block">
                    {pd.marketsLabel}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.markets.map((m) => (
                      <span
                        key={m}
                        className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div>
              <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
                {pd.advantagesLabel}
              </span>
              <h2 className="text-2xl font-bold text-white mb-6">{pd.whyTitle}</h2>
              <ul className="space-y-3">
                {product.differentiation.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle size={15} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">{pd.ctaTitle}</h2>
          <p className="text-wolf-gray mb-8">{pd.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demande-offre"
              className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
            >
              {pd.ctaRfq}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-8 py-4 rounded hover:bg-wolf-green hover:text-white transition-colors"
            >
              {pd.ctaTalk}
            </Link>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-wolf-dark-green mb-8">{pd.otherProducts}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                to={`/produits/${p.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-wolf-beige hover:shadow-md transition-shadow"
              >
                <div className="relative h-36 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-wolf-dark-green text-sm mb-1">{p.name}</h3>
                  <div className="flex items-center gap-1 text-wolf-green text-xs font-medium group-hover:gap-2 transition-all">
                    {pd.viewLink} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
