import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const photos = [
  {
    src: '/lovable-uploads/agriculture-niger.jpeg',
    caption: 'Agriculture & zones de production – Niger',
  },
  {
    src: '/lovable-uploads/gomme_arabique.jpeg',
    caption: 'Gomme arabique (E414) – Acacia Senegal',
  },
  {
    src: '/lovable-uploads/sesames.jpeg',
    caption: 'Sésame naturel – Origine Maradi, Niger',
  },
  {
    src: '/lovable-uploads/oignon.jpeg',
    caption: 'Oignon violet de Galmi – Tahoua, Niger',
  },
  {
    src: '/lovable-uploads/arachide.jpeg',
    caption: 'Graine d\'arachide décortiquée – Niger',
  },
  {
    src: '/lovable-uploads/port-bateau.jpeg',
    caption: 'Port de Cotonou – départ des expéditions',
  },
  {
    src: '/lovable-uploads/port-bateau-2.jpeg',
    caption: 'Logistique maritime internationale',
  },
];

const Gallery = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-wolf-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            Galerie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Niger, à l'origine de nos produits
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Photos de terrain, d'entrepôt et de production. La réalité de notre travail au Niger.
          </p>
        </div>
      </div>
    </section>

    {/* Grid */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map(({ src, caption }, i) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-lg ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <div
                className={`bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? 'h-72 md:h-96' : 'h-56 md:h-64'
                }`}
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end">
                <p className="text-white text-sm font-medium p-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-wolf-beige">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-wolf-dark-green mb-4">
          Vous souhaitez en savoir plus sur nos activités terrain ?
        </h2>
        <p className="text-wolf-gray mb-8">
          Contactez-nous pour obtenir une documentation complète sur notre sourcing et nos processus.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
        >
          Nous contacter
        </Link>
      </div>
    </section>
  </Layout>
);

export default Gallery;
