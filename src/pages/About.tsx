import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, MapPin, Users, Globe } from 'lucide-react';

const About = () => (
  <Layout>
    {/* Hero avec image agriculture Niger */}
    <section className="relative min-h-[50vh] flex items-end pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/lovable-uploads/agriculture-niger.jpeg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wolf-dark-green/90 via-wolf-dark-green/55 to-wolf-dark-green/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            À propos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wolf Agro Services
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Fournisseur structuré à l'origine. Spécialisé dans l'export de produits agricoles
            du Niger vers les marchés internationaux depuis Niamey.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Notre entreprise</span>
            <h2 className="section-title mb-4">Un acteur structuré de l'agro-export nigérien</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-5">
              Wolf Agro Services est une société spécialisée dans le sourcing et l'export de
              produits agricoles bruts du Niger. Nous opérons directement dans les zones de production —
              Maradi, Tahoua, Zinder — pour garantir la qualité, la régularité et la traçabilité
              de chaque lot exporté.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-5">
              Notre positionnement est celui d'un fournisseur organisé, pas d'un simple collecteur.
              Nous avons structuré notre chaîne d'approvisionnement pour répondre aux exigences
              des acheteurs professionnels : importateurs, industriels, distributeurs, grossistes et
              centrales d'achat à l'international.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-8">
              En 2025, nous avons exporté 800 tonnes de produits vers 10 pays partenaires.
              Notre objectif : devenir un partenaire de confiance pour les industries de transformation
              qui ont besoin d'un approvisionnement fiable, régulier et conforme à leurs standards.
            </p>
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
          <span className="section-label">Notre raison d'être</span>
          <h2 className="section-title mb-4">Mission, vision & valeurs</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: 'Mission',
              icon: <Globe size={22} />,
              text: 'Connecter les zones de production du Niger aux marchés internationaux. Fournir aux acheteurs professionnels un approvisionnement fiable, traçable et de qualité constante.',
            },
            {
              label: 'Vision',
              icon: <TrendingUpIcon />,
              text: "Devenir le partenaire de référence pour les industriels et importateurs qui cherchent un fournisseur structuré à l'origine en Afrique de l'Ouest.",
            },
            {
              label: 'Valeurs',
              icon: <CheckCircle size={22} />,
              text: "Intégrité dans nos engagements. Excellence dans la qualité. Transparence dans notre sourcing. Partenariats équitables avec les producteurs locaux.",
            },
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
            <span className="section-label">Présence locale</span>
            <h2 className="section-title mb-4">Ancrés au Niger, rayonnant à l'international</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6">
              Notre siège est à Niamey, la capitale du Niger. Nous opérons des réseaux de collecte
              dans les principales zones agricoles du pays : la région de Maradi pour le sésame,
              Tahoua pour l'oignon violet de Galmi, et les régions Tahoua/Zinder/Maradi pour
              la gomme arabique.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { zone: 'Maradi', produits: 'Sésame, Arachide' },
                { zone: 'Tahoua', produits: 'Oignon violet de Galmi, Gomme arabique' },
                { zone: 'Zinder', produits: 'Gomme arabique, Arachide' },
              ].map(({ zone, produits }) => (
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
            { value: '800 t', label: 'Exportées en 2025' },
            { value: '10', label: 'Pays partenaires' },
            { value: '4', label: 'Produits phares' },
            { value: 'Niamey', label: 'Siège – Niger' },
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
        <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">
          Travaillons ensemble
        </h2>
        <p className="text-wolf-gray mb-8">
          Contactez notre équipe pour discuter de vos besoins ou demander une cotation sur mesure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/demande-offre"
            className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
          >
            Demander une offre
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-8 py-4 rounded hover:bg-wolf-green hover:text-white transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default About;
