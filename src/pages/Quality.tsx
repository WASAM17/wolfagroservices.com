import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

const Quality = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-wolf-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            Assurance qualité
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Qualité & Contrôle
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Un process qualité rigoureux à chaque étape, de la collecte à l'expédition.
            Conformité aux standards internationaux, analyses disponibles sur demande.
          </p>
        </div>
      </div>
    </section>

    {/* Process qualité */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Notre démarche</span>
          <h2 className="section-title mb-4">Process qualité de bout en bout</h2>
          <div className="section-divider mx-auto" />
          <p className="text-wolf-gray max-w-2xl mx-auto mt-4">
            Chaque lot est soumis à un contrôle rigoureux avant conditionnement et expédition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Sélection à l\'origine',
              desc: 'Sélection rigoureuse auprès des producteurs. Rejet des matières ne répondant pas aux critères de qualité minimum.',
            },
            {
              step: '02',
              title: 'Tri & nettoyage',
              desc: 'Tri manuel et mécanique. Élimination des impuretés, corps étrangers et éléments défectueux.',
            },
            {
              step: '03',
              title: 'Homogénéisation',
              desc: 'Standardisation des lots pour garantir une qualité uniforme. Calibrage selon les standards du marché.',
            },
            {
              step: '04',
              title: 'Contrôle & analyse',
              desc: 'Analyses via laboratoires indépendants certifiés. Résultats fournis à l\'acheteur sur demande.',
            },
          ].map(({ step, title, desc }) => (
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
            <span className="section-label">Analyses disponibles</span>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
              Analyses laboratoire sur demande
            </h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6 mt-4">
              Des analyses complètes peuvent être réalisées via des organismes certifiés
              (Bureau Veritas et autres) à la demande de l'acheteur. Les résultats accompagnent
              chaque expédition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Analyse physico-chimique',
                'Analyse microbiologique',
                'Métaux lourds',
                'Aflatoxines',
                'Taux d\'humidité',
                'Impuretés et matières étrangères',
                'Teneur en huile',
                'Pureté et conformité additif (E414)',
              ].map((a) => (
                <div key={a} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-wolf-beige text-sm text-wolf-dark">
                  <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-label">Conformité</span>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
              Conformité aux standards export
            </h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6 mt-4">
              Nos produits sont préparés pour répondre aux exigences des marchés européens,
              asiatiques et américains, notamment pour les usages alimentaires et industriels.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Gomme arabique',
                  detail: 'Conformité additif E414. Norme JECFA. Usages alimentaires et pharmaceutiques.',
                },
                {
                  title: 'Sésame',
                  detail: 'Respect des limites MRL (aflatoxines, pesticides). Conformité export alimentaire.',
                },
                {
                  title: 'Oignon de Galmi',
                  detail: 'Produit frais conforme aux normes de la grande distribution.',
                },
                {
                  title: 'Arachide décortiquée',
                  detail: 'Contrôle aflatoxines. Conformité CODEX et réglementations UE.',
                },
              ].map(({ title, detail }) => (
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
            <span className="section-label">Notre engagement</span>
            <h2 className="section-title mb-4">La qualité, notre engagement principal</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6">
              Nous considérons la qualité comme un engagement fondamental, pas une option.
              Chaque lot qui quitte nos entrepôts a été sélectionné, trié et contrôlé selon
              des critères stricts et documentés.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-8">
              Notre objectif est de vous fournir exactement ce qui a été convenu — ni plus,
              ni moins. Consistance, documentation et transparence à chaque expédition.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100%', label: 'Lots documentés' },
                { value: 'Sur demande', label: 'Analyses labo' },
                { value: 'Certifiés', label: 'Partenaires analyse' },
                { value: 'Traçable', label: 'Origine garantie' },
              ].map(({ value, label }) => (
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
          Questions qualité
        </span>
        <h2 className="text-3xl font-bold text-white mb-4">
          Vous avez des exigences qualité spécifiques ?
        </h2>
        <p className="text-white/70 mb-8">
          Parlez-nous de vos cahiers des charges. Nous nous adaptons aux standards de votre marché.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/demande-offre"
            className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-8 py-4 rounded hover:bg-wolf-sand/90 transition-colors"
          >
            Demander une cotation
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-white transition-colors"
          >
            Parler à notre équipe
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Quality;
