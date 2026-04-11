import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { ArrowRight, CheckCircle, Globe, Package, TrendingUp, Shield, Truck, Leaf } from 'lucide-react';

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative min-h-screen flex items-center">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/lovable-uploads/terrain.jpeg')` }}
    />
    <div className="absolute inset-0 bg-wolf-dark-green/75" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 md:pt-40">
      <div className="max-w-3xl">
        <span className="inline-block text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-6">
          Sourcing & Export — Niger
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Fournisseur structuré à l'origine.{' '}
          <span className="text-wolf-sand">Export international.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
          Wolf Agro Services approvisionne les marchés internationaux en produits agricoles du Niger —
          gomme arabique, sésame, oignon de Galmi, arachide décortiquée. Qualité contrôlée, logistique maîtrisée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/demande-offre"
            className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-8 py-4 rounded transition-colors hover:bg-wolf-sand/90 text-sm"
          >
            Demander une offre commerciale
          </Link>
          <Link
            to="/produits"
            className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded transition-colors hover:border-white hover:bg-white/10 text-sm gap-2"
          >
            Voir nos produits <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── Stats ────────────────────────────────────────────────────────────────────
const Stats = () => (
  <section className="bg-wolf-green">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {[
          { value: '800 t', label: 'Exportées en 2025' },
          { value: '10', label: 'Pays partenaires' },
          { value: '4', label: 'Produits phares' },
          { value: 'FOB/CIF', label: 'Flexibilité logistique' },
        ].map(({ value, label }) => (
          <div key={label} className="py-10 px-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
            <div className="text-white/60 text-sm">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── About Preview ────────────────────────────────────────────────────────────
const AboutPreview = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label">À propos</span>
          <h2 className="section-title mb-4">
            Un fournisseur structuré, pas un simple collecteur
          </h2>
          <div className="section-divider" />
          <p className="text-wolf-gray leading-relaxed mb-6">
            Basée à Niamey, Wolf Agro Services opère une chaîne d'approvisionnement
            organisée depuis les bassins de production du Niger. Nous travaillons directement
            à l'origine pour garantir régularité des volumes, stabilité de la qualité et
            traçabilité complète.
          </p>
          <p className="text-wolf-gray leading-relaxed mb-8">
            Notre positionnement : celui d'un partenaire fiable pour les importateurs,
            industriels, distributeurs et centrales d'achat qui ont besoin d'un fournisseur
            capable de tenir ses engagements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Sourcing direct à l\'origine',
              'Qualité triée et standardisée',
              'Volumes planifiés et réguliers',
              'Logistique FOB / CIF',
              'Traçabilité complète',
              'Partenaire long terme',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                <CheckCircle size={15} className="text-wolf-green flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors"
          >
            En savoir plus <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative">
          <div
            className="h-80 md:h-96 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url('/lovable-uploads/warehouse.jpeg')` }}
          />
          <div className="absolute -bottom-6 -left-6 bg-wolf-sand text-white p-6 rounded-lg shadow-lg hidden md:block">
            <div className="text-3xl font-bold">800 t</div>
            <div className="text-sm text-white/80">exportées en 2025</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Products Preview ─────────────────────────────────────────────────────────
const ProductsPreview = () => (
  <section className="py-20 md:py-28 bg-wolf-beige">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="section-label">Catalogue</span>
        <h2 className="section-title mb-4">Nos produits d'exportation</h2>
        <div className="section-divider mx-auto" />
        <p className="text-wolf-gray max-w-2xl mx-auto mt-4">
          Quatre produits phares, issus des meilleures zones agricoles du Niger,
          disponibles en volumes export réguliers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card group">
            <div className="relative overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white/80 text-xs font-medium">{product.subtitle}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-wolf-dark-green text-base mb-2 leading-tight">
                {product.name}
              </h3>
              <p className="text-wolf-gray text-sm mb-4 leading-relaxed line-clamp-2">
                {product.heroDesc}
              </p>
              <div className="space-y-1 mb-4">
                {product.highlights.slice(0, 2).map((h) => (
                  <div key={h} className="flex items-center gap-1.5 text-xs text-wolf-gray">
                    <div className="w-1 h-1 rounded-full bg-wolf-sand flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
              <Link
                to={`/produits/${product.slug}`}
                className="flex items-center justify-between text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors group/link"
              >
                Voir le produit
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/produits"
          className="inline-flex items-center gap-2 border-2 border-wolf-green text-wolf-green font-semibold px-6 py-3 rounded hover:bg-wolf-green hover:text-white transition-colors text-sm"
        >
          Voir le catalogue complet <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  </section>
);

// ─── Why Us ───────────────────────────────────────────────────────────────────
const WhyUs = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="section-label">Pourquoi nous choisir</span>
        <h2 className="section-title mb-4">Ce qui nous distingue</h2>
        <div className="section-divider mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Package size={22} />,
            title: 'Sourcing structuré à l\'origine',
            desc: 'Réseau de collecte organisé directement dans les zones de production. Pas d\'intermédiaires inutiles.',
          },
          {
            icon: <Shield size={22} />,
            title: 'Qualité contrôlée',
            desc: 'Tri, nettoyage, homogénéisation. Analyses via laboratoires indépendants sur demande.',
          },
          {
            icon: <TrendingUp size={22} />,
            title: 'Volumes réguliers',
            desc: 'Capacités d\'export planifiées. Engagements tenus dans la durée, adaptés aux contrats long terme.',
          },
          {
            icon: <Truck size={22} />,
            title: 'Logistique internationale',
            desc: 'FOB Cotonou ou CIF toutes destinations. Partenaires maritimes reconnus : CMA CGM, Maersk.',
          },
          {
            icon: <Globe size={22} />,
            title: '10 pays partenaires',
            desc: 'Présence sur les marchés européens, asiatiques et africains. Expérience export confirmée.',
          },
          {
            icon: <Leaf size={22} />,
            title: 'Ancrage local fort',
            desc: 'Implantés au Niger, nous valorisons les filières locales et contribuons au développement économique régional.',
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="p-6 border border-wolf-beige rounded-lg hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-wolf-green/10 text-wolf-green rounded-lg flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-wolf-dark-green font-bold text-base mb-2">{title}</h3>
            <p className="text-wolf-gray text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Quality & Logistique Split ───────────────────────────────────────────────
const QualityExport = () => (
  <section className="bg-wolf-dark-green py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">Qualité</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contrôle qualité rigoureux</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Chaque lot passe par un processus de tri, nettoyage et standardisation avant expédition.
            Des analyses via laboratoires certifiés sont disponibles sur demande.
          </p>
          <ul className="space-y-2 mb-8">
            {['Tri et nettoyage à l\'origine', 'Homogénéisation des lots', 'Analyses physico-chimiques', 'Conformité aux standards export'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/qualite"
            className="inline-flex items-center gap-2 text-wolf-sand text-sm font-semibold hover:text-white transition-colors"
          >
            Notre démarche qualité <ArrowRight size={15} />
          </Link>
        </div>
        <div>
          <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">Export</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Logistique internationale maîtrisée</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Expéditions depuis le port de Cotonou en conditions FOB ou CIF, vers toutes destinations mondiales.
            Documentation export complète fournie.
          </p>
          <ul className="space-y-2 mb-8">
            {['FOB : Port de Cotonou', 'CIF : Toutes destinations', 'Partenaires CMA CGM, Maersk', 'Documentation export complète'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-wolf-sand flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/export"
            className="inline-flex items-center gap-2 text-wolf-sand text-sm font-semibold hover:text-white transition-colors"
          >
            Notre logistique export <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── Impact Section ───────────────────────────────────────────────────────────
const ImpactSection = () => (
  <section className="py-20 md:py-28 bg-wolf-beige">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          className="h-72 md:h-96 rounded-lg bg-cover bg-center order-2 lg:order-1"
          style={{ backgroundImage: `url('/lovable-uploads/sorting.jpeg')` }}
        />
        <div className="order-1 lg:order-2">
          <span className="section-label">Impact & Sourcing</span>
          <h2 className="section-title mb-4">Ancrés au Niger, ouverts au monde</h2>
          <div className="section-divider" />
          <p className="text-wolf-gray leading-relaxed mb-6">
            Notre réseau de collecte s'appuie sur des producteurs locaux organisés dans les meilleures
            zones agricoles du Niger : Maradi, Tahoua, Zinder. Nous structurons les filières pour
            en extraire le maximum de valeur.
          </p>
          <p className="text-wolf-gray leading-relaxed mb-8">
            En travaillant directement à l'origine, nous contribuons au développement économique
            des communautés rurales tout en offrant à nos acheteurs une traçabilité complète.
          </p>
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors"
          >
            Notre approche terrain <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── CTA Final ────────────────────────────────────────────────────────────────
const CTAFinal = () => (
  <section className="py-20 md:py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="section-label">Travailler ensemble</span>
      <h2 className="text-3xl md:text-4xl font-bold text-wolf-dark-green mb-4">
        Vous cherchez un fournisseur fiable à l'origine ?
      </h2>
      <p className="text-wolf-gray text-lg mb-10 max-w-2xl mx-auto">
        Contactez notre équipe export pour discuter de vos besoins en volumes, qualité
        et conditions logistiques. Réponse sous 48h.
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
          Parler à l'équipe export
        </Link>
      </div>
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Index = () => (
  <Layout>
    <Hero />
    <Stats />
    <AboutPreview />
    <ProductsPreview />
    <WhyUs />
    <QualityExport />
    <ImpactSection />
    <CTAFinal />
  </Layout>
);

export default Index;
