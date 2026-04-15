'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '@/i18n';

const Quality = () => {
  const { t } = useTranslation();
  const q = t.quality;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-wolf-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
              {q.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{q.heroTitle}</h1>
            <p className="text-white/70 text-lg leading-relaxed">{q.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Process qualité */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">{q.processLabel}</span>
            <h2 className="section-title mb-4">{q.processTitle}</h2>
            <div className="section-divider mx-auto" />
            <p className="text-wolf-gray max-w-2xl mx-auto mt-4">{q.processDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {q.steps.map(({ step, title, desc }) => (
              <div key={step} className="relative p-6 border border-wolf-beige rounded-lg">
                <div className="text-4xl font-bold text-wolf-beige mb-4">{step}</div>
                <h3 className="text-wolf-dark-green font-bold mb-2">{title}</h3>
                <p className="text-wolf-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyses disponibles */}
      <section className="py-20 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">{q.analysesLabel}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
                {q.analysesTitle}
              </h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-6 mt-4">{q.analysesDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.analysesList.map((a) => (
                  <div key={a} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-wolf-beige text-sm text-wolf-dark">
                    <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">{q.conformityLabel}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
                {q.conformityTitle}
              </h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-6 mt-4">{q.conformityDesc}</p>
              <ul className="space-y-4">
                {q.conformityItems.map(({ title, detail }) => (
                  <div key={title} className="p-4 bg-white rounded-lg border border-wolf-beige">
                    <div className="font-semibold text-wolf-dark-green text-sm mb-1">{title}</div>
                    <div className="text-wolf-gray text-sm">{detail}</div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo + engagement */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="h-72 md:h-96 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
            />
            <div>
              <span className="section-label">{q.engagementLabel}</span>
              <h2 className="section-title mb-4">{q.engagementTitle}</h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-6">{q.engagementP1}</p>
              <p className="text-wolf-gray leading-relaxed mb-8">{q.engagementP2}</p>
              <div className="grid grid-cols-2 gap-4">
                {q.engagementStats.map(({ value, label }) => (
                  <div key={label} className="text-center p-4 bg-wolf-beige rounded-lg">
                    <div className="font-bold text-wolf-dark-green mb-1">{value}</div>
                    <div className="text-wolf-gray text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-wolf-dark-green">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            {q.ctaLabel}
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">{q.ctaTitle}</h2>
          <p className="text-white/70 mb-8">{q.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande-offre"
              className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-8 py-4 rounded hover:bg-wolf-sand/90 transition-colors"
            >
              {t.common.requestQuote}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-white transition-colors"
            >
              {t.common.talkToExport}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
