'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n';

const Export = () => {
  const { t } = useTranslation();
  const e = t.export;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/lovable-uploads/port-bateau.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wolf-dark-green/90 via-wolf-dark-green/50 to-wolf-dark-green/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
          <div className="max-w-3xl">
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
              {e.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{e.heroTitle}</h1>
            <p className="text-white/80 text-lg leading-relaxed">{e.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Approche logistique */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">{e.approachLabel}</span>
              <h2 className="section-title mb-4">{e.approachTitle}</h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-5">{e.approachP1}</p>
              <p className="text-wolf-gray leading-relaxed mb-8">{e.approachP2}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: e.portDeparture, value: e.portValue },
                  { label: e.incoterms, value: e.incotermsValue },
                  { label: e.partners, value: e.partnersValue },
                  { label: e.destinations, value: e.destinationsValue },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-wolf-beige p-4 rounded-lg">
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-1">{label}</div>
                    <div className="font-bold text-wolf-dark-green">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div
                className="h-56 md:h-64 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('/lovable-uploads/port-bateau.jpeg')` }}
              />
              <div
                className="h-36 md:h-44 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('/lovable-uploads/port-bateau-2.jpeg')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOB / CIF */}
      <section className="py-20 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">{e.incotermsLabel}</span>
            <h2 className="section-title mb-4">{e.incotermsTitle}</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-wolf-beige">
              <div className="text-wolf-sand font-bold text-2xl mb-2">{e.fobTitle}</div>
              <div className="text-wolf-dark-green font-semibold text-lg mb-4">{e.fobSubtitle}</div>
              <p className="text-wolf-gray text-sm leading-relaxed mb-5">{e.fobDesc}</p>
              <ul className="space-y-2">
                {e.fobItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                    <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-wolf-dark-green p-8 rounded-lg">
              <div className="text-wolf-sand font-bold text-2xl mb-2">{e.cifTitle}</div>
              <div className="text-white font-semibold text-lg mb-4">{e.cifSubtitle}</div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{e.cifDesc}</p>
              <ul className="space-y-2">
                {e.cifItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle size={14} className="text-wolf-sand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">{e.docLabel}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
                {e.docTitle}
              </h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-6 mt-4">{e.docDesc}</p>
              <ul className="space-y-3">
                {e.docItems.map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-wolf-dark text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="section-label">{e.capacityLabel}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
                {e.capacityTitle}
              </h2>
              <div className="section-divider" />
              <div className="mt-4 space-y-4">
                {e.capacityItems.map(({ produit, volume, note }) => (
                  <div key={produit} className="flex items-start justify-between p-4 bg-wolf-beige rounded-lg">
                    <div>
                      <div className="font-semibold text-wolf-dark-green text-sm">{produit}</div>
                      <div className="text-wolf-gray text-xs mt-0.5">{note}</div>
                    </div>
                    <div className="text-wolf-green font-bold text-sm text-right">{volume}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/lovable-uploads/port-bateau-2.jpeg')` }}
        />
        <div className="absolute inset-0 bg-wolf-dark-green/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            {e.presenceLabel}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{e.presenceTitle}</h2>
          <p className="text-white/70 max-w-2xl mx-auto">{e.presenceDesc}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wolf-beige">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">{e.ctaTitle}</h2>
          <p className="text-wolf-gray mb-8">{e.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande-offre"
              className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
            >
              {t.common.requestQuote}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-8 py-4 rounded hover:bg-wolf-green hover:text-white transition-colors"
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Export;
