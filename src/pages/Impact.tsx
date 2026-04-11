import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';

const Impact = () => (
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
            Impact & Sourcing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ancrés au Niger, ouverts au monde
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Notre réseau de collecte s'appuie sur des producteurs locaux organisés dans les meilleures
            zones agricoles du Niger. Nous structurons les filières pour en extraire la valeur maximale.
          </p>
        </div>
      </div>
    </section>

    {/* Sourcing */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Notre réseau</span>
            <h2 className="section-title mb-4">Sourcing direct dans les zones de production</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-5">
              Wolf Agro Services opère directement au cœur des bassins de production du Niger.
              Nous travaillons avec des producteurs locaux organisés, auxquels nous offrons
              un débouché fiable à un prix juste.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-5">
              Ce modèle direct nous permet d'obtenir la meilleure qualité à l'origine,
              de structurer les flux de collecte selon nos besoins et ceux de nos acheteurs,
              et de garantir une traçabilité complète de la production à l'export.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-8">
              En réduisant les intermédiaires, nous créons de la valeur des deux côtés :
              meilleur prix pour le producteur, meilleur rapport qualité/prix pour l'acheteur.
            </p>
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
          <span className="section-label">Présence terrain</span>
          <h2 className="section-title mb-4">Nos zones de collecte</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              region: 'Maradi',
              produits: ['Sésame', 'Graine d\'arachide décortiquée'],
              desc: 'Région agricole de premier plan, reconnue pour la qualité de son sésame et de ses arachides. Collecte structurée en période de récolte.',
            },
            {
              region: 'Tahoua',
              produits: ['Oignon violet de Galmi', 'Gomme arabique'],
              desc: 'Berceau de l\'oignon de Galmi, reconnu pour sa qualité exceptionnelle. Zone sahélienne également riche en Acacia Senegal pour la gomme arabique.',
            },
            {
              region: 'Zinder',
              produits: ['Gomme arabique', 'Graine d\'arachide'],
              desc: 'Zone de production important pour la gomme arabique et l\'arachide. Réseau de collecte organisé en partenariat avec les producteurs locaux.',
            },
          ].map(({ region, produits, desc }) => (
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
            <span className="section-label">Structuration des filières</span>
            <h2 className="section-title mb-4">Valorisation locale & développement régional</h2>
            <div className="section-divider" />
            <p className="text-wolf-gray leading-relaxed mb-5">
              Notre activité contribue directement au développement économique des régions
              de production. En structurant la collecte, nous offrons aux producteurs locaux
              un accès à des marchés qui leur seraient autrement inaccessibles.
            </p>
            <p className="text-wolf-gray leading-relaxed mb-8">
              Nous croyons que le commerce équitable à l'origine est le meilleur levier pour
              une durabilité réelle des filières agricoles sahéliennes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Producteurs locaux', desc: 'Réseau organisé et fidélisé' },
                { title: 'Prix équitables', desc: 'Rémunération juste à l\'origine' },
                { title: 'Traçabilité', desc: 'De la ferme au conteneur' },
                { title: 'Emploi local', desc: 'Collecte, tri, conditionnement' },
              ].map(({ title, desc }) => (
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
        <h2 className="text-3xl font-bold text-wolf-dark-green mb-4">
          Travailler avec nous, c'est travailler à l'origine
        </h2>
        <p className="text-wolf-gray mb-8">
          Nos acheteurs bénéficient d'une traçabilité complète et d'un sourcing transparent.
        </p>
        <Link
          to="/demande-offre"
          className="inline-flex items-center justify-center bg-wolf-green text-white font-semibold px-8 py-4 rounded hover:bg-wolf-dark-green transition-colors"
        >
          Demander une offre <ArrowRight size={15} className="ml-2" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Impact;
