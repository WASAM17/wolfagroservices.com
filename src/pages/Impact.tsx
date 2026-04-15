'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n';

const Impact = () => {
  const { t } = useTranslation();
  const i = t.impact;
  return (
  <Layout>
    {/* Hero avec image agriculture Niger */}
    <section className="relative min-h-[50vh] flex items-end pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wolf-dark-green/90 via-wolf-dark-green/55 to-wolf-dark-green/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            {i.heroLabel}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{i.heroTitle}</h1>
          <p className="text-white/80 text-lg leading-relaxed">{i.heroSubtitle}</p>
        </div>
      </div>
    </section>

    {/* Sourcing */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">{i.sourcingLabel}</span>
            <h2 className="section-title mb-4">{i.sourcingTitle}</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-5">{i.sourcingP1}</p>
            <p className="text-wolf-gray leading-relaxed mb-5">{i.sourcingP2}</p>
            <p className="text-wolf-gray leading-relaxed mb-8">{i.sourcingP3}</p>
          </div>
          <div
            className="h-72 md:h-96 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
          />
        </div>
      </div>
    </section>

    {/* Zones */}
    <section className="py-20 bg-wolf-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">{i.zonesLabel}</span>
          <h2 className="section-title mb-4">{i.zonesTitle}</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {i.zonesItems.map(({ region, produits, desc }) => (
            <div key={region} className="bg-white p-7 rounded-lg border border-wolf-beige">
              <div className="text-wolf-sand font-bold text-xl mb-1">{region}</div>
              <div className="text-wolf-dark-green font-semibold text-sm mb-4">Niger</div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {produits.map((p) => (
                  <span key={p} className="text-xs bg-wolf-green/10 text-wolf-green px-2.5 py-1 rounded-full font-medium">
                    {p}
                  </span>
                ))}
              </div>
              <p className="text-wolf-gray text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Filières & durabilité */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="h-72 md:h-96 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
          />
          <div>
            <span className="section-label">{i.filiereLabel}</span>
            <h2 className="section-title mb-4">{i.filiereTitle}</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-5">{i.filiereP1}</p>
            <p className="text-wolf-gray leading-relaxed mb-8">{i.filiereP2}</p>
            <div className="grid grid-cols-2 gap-4">
              {i.filiereStats.map(({ title, desc }) => (
                <div key={title} className="p-4 bg-wolf-beige rounded-lg">
                  <div className="font-semibold text-wolf-dark-green text-sm mb-1">{title}</div>
                  <div className="text-wolf-gray text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-wolf-beige">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">{i.ctaTitle}</h2>
        <p className="text-wolf-gray mb-8">{i.ctaDesc}</p>
        <Link
          href="/demande-offre"
          className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
        >
          {t.common.requestOffer} <ArrowRight size={15} className="ml-2" />
        </Link>
      </div>
    </section>
  </Layout>
  );
};

export default Impact;
