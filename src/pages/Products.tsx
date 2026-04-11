import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const Products = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-wolf-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            Catalogue
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos produits d'exportation
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Quatre produits phares issus des meilleures zones agricoles du Niger.
            Sourcing direct, qualité contrôlée, volumes réguliers pour l'export international.
          </p>
        </div>
      </div>
    </section>

    {/* Product Grid */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group border border-wolf-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white/70 text-xs font-medium tracking-wide">{product.subtitle}</span>
                  <h2 className="text-white text-xl md:text-2xl font-bold mt-1">{product.name}</h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-wolf-gray text-sm leading-relaxed mb-5">
                  {product.heroDesc}
                </p>
                <div className="grid grid-cols-1 gap-1.5 mb-6">
                  {product.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-wolf-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/produits/${product.slug}`}
                    className="flex-1 inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-5 py-3 rounded hover:bg-wolf-dark-green transition-colors text-sm"
                  >
                    Voir le produit
                  </Link>
                  <Link
                    to="/demande-offre"
                    className="flex-1 inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-5 py-3 rounded hover:bg-wolf-green hover:text-white transition-colors text-sm"
                  >
                    Demander une offre
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-wolf-beige">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
          Vous ne trouvez pas ce que vous cherchez ?
        </h2>
        <p className="text-wolf-gray mb-8">
          Contactez-nous pour discuter de vos besoins spécifiques en produits agricoles du Niger.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
        >
          Parler à l'équipe export <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Products;
