import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Export = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-wolf-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
            Logistique internationale
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Export & Logistique
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            De la collecte à l'origine jusqu'à la livraison au port de destination.
            Nous maîtrisons l'ensemble de la chaîne logistique export.
          </p>
        </div>
      </div>
    </section>

    {/* Approche logistique */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Notre approche</span>
            <h2 className="section-title mb-4">Une logistique structurée de bout en bout</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-5">
              Wolf Agro Services gère la chaîne logistique depuis la collecte dans les zones de
              production du Niger jusqu'à la mise à bord au port de Cotonou. Nous travaillons avec
              des partenaires maritimes reconnus pour garantir des expéditions fiables et bien
              documentées.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-8">
              Nos conditions commerciales standards sont FOB Cotonou. Nous proposons également
              des conditions CIF vers toutes destinations mondiales, avec prise en charge du
              fret et de l'assurance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Port de départ', value: 'Cotonou, Bénin' },
                { label: 'Incoterms', value: 'FOB / CIF' },
                { label: 'Partenaires', value: 'CMA CGM, Maersk' },
                { label: 'Destinations', value: 'Monde entier' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-wolf-beige p-4 rounded-lg">
                  <div className="text-xs text-wolf-gray uppercase tracking-wide mb-1">{label}</div>
                  <div className="font-bold text-wolf-dark-green">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="h-80 md:h-96 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url('/lovable-uploads/warehouse.jpeg')` }}
          />
        </div>
      </div>
    </section>

    {/* FOB / CIF */}
    <section className="py-20 bg-wolf-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Conditions commerciales</span>
          <h2 className="section-title mb-4">FOB & CIF – flexibilité totale</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-wolf-beige">
            <div className="text-wolf-sand font-bold text-2xl mb-2">FOB</div>
            <div className="text-wolf-dark-green font-semibold text-lg mb-4">Free On Board – Cotonou</div>
            <p className="text-wolf-gray text-sm leading-relaxed mb-5">
              Nous prenons en charge tous les frais jusqu'à la mise à bord au port de Cotonou.
              L'acheteur gère le fret maritime et l'assurance depuis le port.
            </p>
            <ul className="space-y-2">
              {[
                'Collecte et transport vers Cotonou inclus',
                'Dédouanement export Niger inclus',
                'Mise à bord comprise',
                'Documentation complète fournie',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                  <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-wolf-dark-green p-8 rounded-lg">
            <div className="text-wolf-sand font-bold text-2xl mb-2">CIF</div>
            <div className="text-white font-semibold text-lg mb-4">Cost Insurance Freight</div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Nous prenons en charge le fret maritime et l'assurance jusqu'au port de destination.
              Solution clé en main pour l'acheteur.
            </p>
            <ul className="space-y-2">
              {[
                'FOB inclus',
                'Fret maritime pris en charge',
                'Assurance maritime incluse',
                'Livraison port de destination',
              ].map((item) => (
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
            <span className="section-label">Conformité export</span>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
              Documentation export complète
            </h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-6 mt-4">
              Chaque expédition est accompagnée d'un dossier documentaire complet, conforme
              aux exigences douanières et réglementaires des pays de destination.
            </p>
            <ul className="space-y-3">
              {[
                'Facture commerciale (Commercial Invoice)',
                'Liste de colisage (Packing List)',
                'Connaissement (Bill of Lading)',
                'Certificat d\'origine',
                'Certificat phytosanitaire si requis',
                'Certificat d\'analyse laboratoire sur demande',
              ].map((doc) => (
                <li key={doc} className="flex items-center gap-2 text-wolf-dark text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="section-label">Volumes & capacités</span>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark-green mb-4">
              Capacités d'export par produit
            </h2>
            <div className="section-divider" />
            <div className="mt-4 space-y-4">
              {[
                { produit: 'Gomme arabique', volume: '1 à 3 conteneurs/mois', note: '≈ 18,7 t/conteneur' },
                { produit: 'Sésame', volume: '15 conteneurs 20\'', note: '≈ 280 t par campagne' },
                { produit: 'Oignon de Galmi', volume: '75 tonnes/mois', note: 'Campagne : fév – mai' },
                { produit: 'Arachide décortiquée', volume: '1 à 3 conteneurs/mois', note: '≈ 18,7 t/conteneur' },
              ].map(({ produit, volume, note }) => (
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
    <section className="py-16 bg-wolf-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4 block">
          Présence internationale
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          10 pays partenaires, world-wide shipping
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Nous exportons vers l'Europe, l'Asie et l'Afrique. Notre logistique s'adapte
          à toutes les destinations.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-wolf-beige">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">
          Besoin d'une cotation logistique ?
        </h2>
        <p className="text-wolf-gray mb-8">
          Indiquez-nous vos besoins (produit, volume, incoterm, destination) et nous vous
          répondons sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/demande-offre"
            className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
          >
            Demander une cotation (RFQ)
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

export default Export;
