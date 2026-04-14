import React from 'react';
import Layout from '@/components/Layout';

interface Section {
  title: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: Section[];
}

/**
 * Shared premium layout for all legal pages (CGU, Privacy, Cookies).
 *
 * ⚠️  NOTE: The legal content on these pages is generic and indicative.
 *     It must be reviewed and validated by a qualified legal professional
 *     before final production deployment, according to the applicable law
 *     of the country of operation and the third-party services actually used.
 */
const LegalPage = ({ title, subtitle, lastUpdated, sections }: LegalPageProps) => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-12 bg-wolf-dark-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h1>
        {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
        <p className="text-wolf-sand/70 text-xs mt-2">{lastUpdated}</p>
      </div>
    </section>

    {/* Content */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-wolf-dark-green mb-3 flex items-center gap-3">
                <span className="text-wolf-sand font-mono text-sm w-7 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.title}
              </h2>
              <div className="pl-10 space-y-3 border-l-2 border-wolf-beige">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-wolf-gray text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legal disclaimer note */}
        <div className="mt-16 p-5 bg-wolf-beige rounded-lg border border-wolf-beige text-xs text-wolf-gray leading-relaxed">
          ⚠️ Ce contenu est fourni à titre indicatif et doit être revu et validé par un conseil juridique qualifié avant toute mise en production définitive.
        </div>
      </div>
    </section>
  </Layout>
);

export default LegalPage;
