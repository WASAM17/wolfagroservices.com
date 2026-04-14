import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';

const PHOTO_SRCS = [
  '/lovable-uploads/agriculture-niger.jpeg',
  '/lovable-uploads/gomme_arabique.jpeg',
  '/lovable-uploads/sesames.jpeg',
  '/lovable-uploads/oignon.jpeg',
  '/lovable-uploads/arachide.jpeg',
  '/lovable-uploads/port-bateau.jpeg',
  '/lovable-uploads/port-bateau-2.jpeg',
];

const Gallery = () => {
  const { t } = useTranslation();
  const g = t.gallery;
  const photos = PHOTO_SRCS.map((src, idx) => ({ src, caption: g.captions[idx] }));
  return (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-wolf-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            {g.heroLabel}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{g.heroTitle}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{g.heroSubtitle}</p>
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
        <h2 className="text-2xl font-bold text-wolf-dark-green mb-4">{g.ctaTitle}</h2>
        <p className="text-wolf-gray mb-8">{g.ctaDesc}</p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
        >
          {t.common.contactUs}
        </Link>
      </div>
    </section>
  </Layout>
  );
};

export default Gallery;
