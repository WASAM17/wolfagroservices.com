'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { useTranslation } from '@/i18n';

const About = () => {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wolf-dark-green/90 via-wolf-dark-green/55 to-wolf-dark-green/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
          <div className="max-w-3xl">
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
              {a.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{a.heroTitle}</h1>
            <p className="text-white/80 text-lg leading-relaxed">{a.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">{a.companyLabel}</span>
              <h2 className="section-title mb-4">{a.companyTitle}</h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-5">{a.companyP1}</p>
              <p className="text-wolf-gray leading-relaxed mb-5">{a.companyP2}</p>
              <p className="text-wolf-gray leading-relaxed mb-8">{a.companyP3}</p>
            </div>
            <div>
              <div
                className="h-80 md:h-96 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Valeurs */}
      <section className="py-20 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">{a.mvrLabel}</span>
            <h2 className="section-title mb-4">{a.mvrTitle}</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: a.mission, icon: <GlobeIcon />, text: a.missionText },
              { label: a.vision, icon: <TrendingUpIcon />, text: a.visionText },
              { label: a.values, icon: <CheckCircle size={22} />, text: a.valuesText },
            ].map(({ label, icon, text }) => (
              <div key={label} className="bg-white p-8 rounded-lg border border-wolf-beige">
                <div className="w-10 h-10 bg-wolf-green/10 text-wolf-green rounded-lg flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-wolf-dark-green font-bold text-lg mb-3">{label}</h3>
                <p className="text-wolf-gray text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niger & Sourcing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="h-72 md:h-96 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
            />
            <div>
              <span className="section-label">{a.localLabel}</span>
              <h2 className="section-title mb-4">{a.localTitle}</h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-6">{a.localP}</p>
              <div className="space-y-3 mb-8">
                {a.zones.map(({ zone, produits }) => (
                  <div key={zone} className="flex items-start gap-3 p-3 bg-wolf-beige rounded-lg">
                    <MapPin size={16} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-wolf-dark-green text-sm">{zone}</span>
                      <span className="text-wolf-gray text-sm"> — {produits}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-wolf-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '800 t', label: a.statsExported },
              { value: '10', label: a.statsPartners },
              { value: '4', label: a.statsProducts },
              { value: 'Niamey', label: a.statsHQ },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-white/60 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">{a.ctaTitle}</h2>
          <p className="text-wolf-gray mb-8">{a.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande-offre"
              className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
            >
              {t.common.requestOffer}
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

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default About;
