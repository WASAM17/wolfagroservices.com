import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { CheckCircle, ArrowRight, Leaf, Users, Shield } from 'lucide-react';
import { useTranslation } from '@/i18n';

const ESG = () => {
  const { t } = useTranslation();
  const e = t.esg;

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/lovable-uploads/RSE-2.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wolf-dark-green/92 via-wolf-dark-green/55 to-wolf-dark-green/25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
          <div className="max-w-3xl">
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
              {e.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {e.heroTitle}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">{e.heroP}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-6 py-3 rounded hover:bg-wolf-sand/90 transition-colors text-sm"
              >
                {e.heroCta1}
              </Link>
              <Link
                to="/produits"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-6 py-3 rounded hover:border-white transition-colors text-sm"
              >
                {e.heroCta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label">{e.visionLabel}</span>
          <h2 className="section-title mb-4">{e.visionTitle}</h2>
          <div className="section-divider mx-auto" />
          <p className="text-wolf-gray text-lg leading-relaxed mt-6">{e.visionText}</p>
        </div>
      </section>

      {/* ── E — Environnement ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-wolf-green/10 flex items-center justify-center flex-shrink-0">
                  <Leaf size={18} className="text-wolf-green" />
                </div>
                <span className="text-wolf-green font-bold text-sm tracking-widest uppercase">
                  {e.envLabel}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
                {e.envTitle}
              </h2>
              <div className="section-divider" />
              <p className="text-wolf-gray leading-relaxed mb-6 mt-4">{e.envP}</p>
              <ul className="space-y-3 mb-8">
                {e.envPractices.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-wolf-dark text-sm">
                    <CheckCircle size={15} className="text-wolf-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Training sub-block */}
              <div className="bg-white rounded-lg p-6 border border-wolf-beige">
                <h3 className="font-bold text-wolf-dark-green mb-3">{e.envTrainingTitle}</h3>
                <p className="text-wolf-gray text-sm leading-relaxed mb-4">{e.envTrainingP}</p>
                <ul className="space-y-2 mb-4">
                  {e.envTrainingItems.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-wolf-sand text-sm font-medium italic">{e.envAcaciaNote}</p>
                <p className="text-wolf-gray text-xs mt-3 leading-relaxed">{e.envTrainingNote}</p>
              </div>
            </div>

            {/* Image */}
            <div className="space-y-4">
              <div
                className="h-72 md:h-96 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('/lovable-uploads/RSE-1.jpeg')` }}
              />
              <div
                className="h-44 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── S — Social ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-wolf-sand/10 flex items-center justify-center flex-shrink-0">
              <Users size={18} className="text-wolf-sand" />
            </div>
            <span className="text-wolf-sand font-bold text-sm tracking-widest uppercase">
              {e.socialLabel}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
            {e.socialTitle}
          </h2>
          <div className="section-divider mb-14" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div
              className="h-[480px] rounded-lg bg-cover bg-center order-last lg:order-first"
              style={{ backgroundImage: `url('/lovable-uploads/RSE-2.jpeg')` }}
            />

            {/* Cards */}
            <div className="space-y-6">
              {/* Women */}
              <div className="bg-wolf-beige rounded-lg p-6">
                <h3 className="font-bold text-wolf-dark-green mb-4">{e.womenTitle}</h3>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-bold text-wolf-sand">{e.womenStat}</span>
                  <span className="text-wolf-gray text-sm pb-2">{e.womenStatDesc}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {e.womenActivities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-wolf-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-wolf-green flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="text-wolf-dark-green font-semibold text-sm">{e.womenKey}</p>
              </div>

              {/* Empowerment */}
              <div className="bg-wolf-beige rounded-lg p-6">
                <h3 className="font-bold text-wolf-dark-green mb-3">{e.empowerTitle}</h3>
                <p className="text-wolf-gray text-sm leading-relaxed mb-4">{e.empowerP}</p>
                <ul className="space-y-2 mb-4">
                  {e.empowerItems.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                      <CheckCircle size={13} className="text-wolf-green flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-wolf-dark-green font-semibold text-sm italic">{e.empowerKey}</p>
              </div>
            </div>
          </div>

          {/* Bottom row: equality + community */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="border border-wolf-beige rounded-lg p-6">
              <h3 className="font-bold text-wolf-dark-green mb-4">{e.equalTitle}</h3>
              <ul className="space-y-3">
                {e.equalItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-wolf-dark">
                    <CheckCircle size={14} className="text-wolf-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-wolf-beige rounded-lg p-6">
              <h3 className="font-bold text-wolf-dark-green mb-3">{e.communityTitle}</h3>
              <p className="text-wolf-gray text-sm leading-relaxed mb-4">{e.communityP}</p>
              <ul className="space-y-2 mb-4">
                {e.communityItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                    <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-wolf-dark-green font-semibold text-xs">{e.communityKey}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── G — Gouvernance ──────────────────────────────────────────── */}
      <section className="py-20 bg-wolf-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Shield size={18} className="text-wolf-sand" />
            </div>
            <span className="text-wolf-sand font-bold text-sm tracking-widest uppercase">
              {e.govLabel}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{e.govTitle}</h2>
          <div className="section-divider mb-10 bg-wolf-sand/40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Supply chain */}
            <div className="bg-white/8 border border-white/10 rounded-lg p-6">
              <p className="text-white/70 text-sm leading-relaxed mb-5">{e.govP}</p>
              <ul className="space-y-3">
                {e.govItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle size={14} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnerships */}
            <div className="bg-white/8 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-wolf-sand mb-3">{e.partnersTitle}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{e.partnersP}</p>
              <ul className="space-y-3">
                {e.partnersItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle size={14} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality */}
            <div className="bg-white/8 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-wolf-sand mb-3">{e.qualityGovTitle}</h3>
              <ul className="space-y-3 mt-8">
                {e.qualityGovItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle size={14} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── KPIs ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-wolf-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">{e.kpiLabel}</span>
            <div className="section-divider mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {e.kpis.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white rounded-lg p-6 text-center border border-wolf-beige hover:shadow-md transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-wolf-sand mb-2">{value}</div>
                <div className="text-wolf-gray text-xs leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ambition ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">{e.ambitionLabel}</span>
              <h2 className="section-title mb-4">{e.ambitionTitle}</h2>
              <div className="section-divider" />
              <ul className="space-y-4 mt-6 mb-8">
                {e.ambitionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-wolf-dark">
                    <ArrowRight size={16} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-wolf-dark-green font-bold text-base border-l-4 border-wolf-sand pl-4">
                {e.ambitionKey}
              </p>
            </div>
            <div
              className="h-72 md:h-[450px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/RSE-3.jpeg')` }}
            />
          </div>
        </div>
      </section>

      {/* ── Shared Value + CTA ───────────────────────────────────────── */}
      <section className="py-20 bg-wolf-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
              {e.sharedLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{e.sharedTitle}</h2>
            <div className="section-divider mx-auto bg-wolf-sand/40 mb-8" />
            <p className="text-white/70 text-lg mb-8">{e.sharedP}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10">
              {e.sharedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/80"
                >
                  <CheckCircle size={14} className="text-wolf-sand mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demande-offre"
                className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-8 py-4 rounded hover:bg-wolf-sand/90 transition-colors"
              >
                {e.ctaOffer}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-white transition-colors"
              >
                {e.ctaTalk}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ESG;
