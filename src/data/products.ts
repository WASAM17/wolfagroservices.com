export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  heroTagline: string;
  heroDesc: string;
  highlights: string[];
  positioning: string;
  positioningPoints: string[];
  specs: ProductSpec[];
  usages: string[];
  capacity: string;
  capacityPoints: string[];
  availability: string;
  qualityDesc: string;
  qualityPoints: string[];
  logistique: string;
  logistiquePoints: string[];
  differentiation: string[];
  markets?: string[];
  image: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'gum-arabic',
    slug: 'gomme-arabique',
    name: 'Gomme Arabique Premium (E414)',
    subtitle: 'Origine Niger – Acacia Senegal',
    heroTagline: 'Approvisionnement fiable, traçable et disponible toute l\'année',
    heroDesc: 'Nous fournissons de la gomme arabique Acacia Senegal, issue des régions sahéliennes du Niger (Tahoua, Zinder, Maradi), destinée aux industries alimentaires, pharmaceutiques et cosmétiques.',
    highlights: [
      'Disponibilité continue toute l\'année',
      'Capacité export : 1 à 3 conteneurs / mois',
      'Qualité triée, nettoyée et contrôlée',
    ],
    positioning: 'Un fournisseur d\'origine structuré pour les marchés internationaux. Nous opérons une chaîne d\'approvisionnement organisée, conçue pour répondre aux exigences des industriels internationaux.',
    positioningPoints: [
      'Régularité des volumes',
      'Stabilité de la qualité',
      'Traçabilité complète',
      'Continuité d\'approvisionnement',
    ],
    specs: [
      { label: 'Origine botanique', value: 'Acacia Senegal' },
      { label: 'Forme', value: 'Nodules naturels' },
      { label: 'Couleur', value: 'Ambre à brun rougeâtre' },
      { label: 'Traitement', value: 'Trié et nettoyé manuellement' },
      { label: 'Conditionnement', value: 'Sacs PP 50 kg' },
      { label: 'Additif alimentaire', value: 'E414' },
    ],
    usages: [
      'Industrie agroalimentaire',
      'Industrie pharmaceutique',
      'Industrie cosmétique',
      'Applications techniques industrielles',
    ],
    capacity: '1 à 3 conteneurs par mois (≈ 18,7 t/conteneur)',
    capacityPoints: [
      '1 à 3 conteneurs par mois',
      'Environ 18,7 tonnes par conteneur',
      'Approvisionnement structuré à l\'origine',
      'Réseau de collecte organisé',
      'Capacité évolutive selon contrats long terme',
    ],
    availability: 'Disponibilité annuelle garantie',
    qualityDesc: 'Chaque lot peut être analysé via un laboratoire indépendant.',
    qualityPoints: [
      'Analyse physico-chimique',
      'Analyse microbiologique',
      'Métaux lourds',
      'Pureté et conformité E414',
    ],
    logistique: 'FOB Cotonou – CIF toutes destinations mondiales',
    logistiquePoints: [
      'FOB : Port de Cotonou',
      'CIF : Toutes destinations mondiales',
      'Transport via partenaires maritimes internationaux reconnus',
      'Documentation export complète',
    ],
    differentiation: [
      'Approvisionnement direct origine Niger',
      'Qualité triée et standardisée',
      'Disponibilité toute l\'année',
      'Logistique internationale maîtrisée',
      'Flexibilité commerciale FOB / CIF',
    ],
    image: '/lovable-uploads/terrain.jpeg',
    color: '#C9A96E',
  },
  {
    id: 'sesame',
    slug: 'sesame',
    name: 'Sésame Naturel du Niger',
    subtitle: 'Origine Maradi – Approvisionnement structuré & export international',
    heroTagline: 'Approvisionnement structuré & export international',
    heroDesc: 'Nous fournissons du sésame naturel de haute qualité, récolté dans la région de Maradi (Niger), une zone reconnue pour la production de sésame à forte valeur marchande.',
    highlights: [
      'Disponibilité saisonnière : octobre à mars',
      'Capacité : 15 conteneurs 20\' (≈ 280,5 tonnes)',
      'Origine : Maradi, Niger',
    ],
    positioning: 'Nous opérons directement au cœur des zones de production afin de garantir un approvisionnement structuré, une sélection rigoureuse à l\'origine et une qualité conforme aux exigences internationales.',
    positioningPoints: [
      'Approvisionnement structuré en période de récolte',
      'Sélection rigoureuse à l\'origine',
      'Qualité conforme aux exigences internationales',
      'Capacité d\'export industrielle et planifiée',
    ],
    specs: [
      { label: 'Origine', value: 'Maradi, Niger' },
      { label: 'Type', value: 'Sésame naturel brut' },
      { label: 'Couleur', value: 'Blanc / crème selon lot' },
      { label: 'Conditionnement', value: 'Sacs PP 50 kg' },
      { label: 'Traitement', value: 'Trié et nettoyé' },
    ],
    usages: [
      'Industrie agroalimentaire',
      'Extraction d\'huile végétale',
      'Boulangerie / pâtisserie',
      'Transformation industrielle',
    ],
    capacity: '15 conteneurs 20\' (≈ 280,5 tonnes par campagne)',
    capacityPoints: [
      '15 conteneurs de 20 pieds',
      'Environ 280,5 tonnes au total',
      'Sourcing direct zones de production',
      'Collecte organisée en période de récolte',
      'Capacité logistique planifiée',
    ],
    availability: 'Fenêtre de disponibilité : octobre à mars',
    qualityDesc: 'Analyses disponibles via Bureau Veritas ou laboratoire certifié.',
    qualityPoints: [
      'Taux d\'humidité',
      'Impuretés et matières étrangères',
      'Analyse microbiologique',
      'Aflatoxines',
      'Teneur en huile',
      'Conformité export alimentaire',
    ],
    logistique: 'FOB Cotonou – CIF toutes destinations mondiales',
    logistiquePoints: [
      'FOB : Port de Cotonou',
      'CIF : Toutes destinations mondiales',
      'Partenaires logistiques : CMA CGM, Maersk',
      'Documentation export complète',
    ],
    differentiation: [
      'Origine directe Maradi, Niger',
      'Approvisionnement structuré en campagne',
      'Volume export industriel (280+ tonnes)',
      'Qualité triée et contrôlée',
      'Tests laboratoire international disponibles',
      'Logistique FOB / CIF flexible',
    ],
    image: '/lovable-uploads/sorting.jpeg',
    color: '#2D7A56',
  },
  {
    id: 'purple-onion',
    slug: 'oignon-galmi',
    name: 'Oignon Violet de Galmi',
    subtitle: 'Origine Tahoua – Niger',
    heroTagline: 'Approvisionnement structuré pour la grande distribution',
    heroDesc: 'Nous fournissons de l\'oignon violet de Galmi, cultivé dans la région de Tahoua (Niger), reconnu pour sa qualité, sa conservation naturelle et sa forte demande sur les marchés ouest-africains.',
    highlights: [
      'Disponibilité : février à mai',
      'Capacité : 75 tonnes par mois',
      'Conditionnement : sacs PP 50 kg',
    ],
    positioning: 'Nous accompagnons les acteurs de la grande distribution en leur fournissant un produit issu d\'une zone de production reconnue, disponible en volumes réguliers pendant la campagne.',
    positioningPoints: [
      'Zone de production reconnue',
      'Volumes réguliers pendant la campagne',
      'Conditionné selon les standards du marché',
      'Adapté aux chaînes logistiques modernes',
    ],
    specs: [
      { label: 'Produit', value: 'Oignon violet de Galmi' },
      { label: 'Origine', value: 'Tahoua, Niger' },
      { label: 'Type', value: 'Oignon frais sélectionné' },
      { label: 'Conditionnement', value: 'Sacs PP 50 kg' },
      { label: 'Traitement', value: 'Trié et calibré' },
    ],
    usages: [
      'Grande distribution',
      'Marchés de gros',
      'Importateurs régionaux',
      'Centrales d\'achat',
    ],
    capacity: '75 tonnes par mois pendant la campagne',
    capacityPoints: [
      '75 tonnes par mois',
      'Collecte organisée en zone de production',
      'Structuration des flux pendant la campagne',
      'Capacité adaptée aux commandes récurrentes',
    ],
    availability: 'Fenêtre de disponibilité : février à mai',
    qualityDesc: 'Tri manuel, sélection et homogénéisation des calibres.',
    qualityPoints: [
      'Tri manuel et sélection',
      'Homogénéisation des calibres',
      'Contrôle visuel',
      'Préparation adaptée aux marchés de gros',
    ],
    logistique: 'Distribution Afrique de l\'Ouest – transport régional structuré',
    logistiquePoints: [
      'Transport régional structuré',
      'Gestion des flux en gros volumes',
      'Livraison vers marchés et plateformes logistiques',
      'Optimisation des coûts de distribution',
    ],
    differentiation: [
      'Produit reconnu sur les marchés régionaux',
      'Approvisionnement structuré de campagne',
      'Volume stable : 75 t/mois',
      'Conditionnement standard',
      'Couverture Afrique de l\'Ouest',
      'Adapté grande distribution et marchés de gros',
    ],
    markets: ['Bénin', 'Burkina Faso', 'Côte d\'Ivoire', 'Ghana', 'Togo'],
    image: '/lovable-uploads/workers.jpeg',
    color: '#5D2E8C',
  },
  {
    id: 'peanuts',
    slug: 'arachide',
    name: 'Graine d\'Arachide Décortiquée',
    subtitle: 'Origine Niger (Zinder & Maradi)',
    heroTagline: 'Approvisionnement structuré pour l\'industrie agroalimentaire',
    heroDesc: 'Nous fournissons de la graine d\'arachide décortiquée de qualité export, issue des zones de production du Niger, destinée aux marchés internationaux et aux acteurs de la grande distribution.',
    highlights: [
      'Capacité : 1 à 3 conteneurs par mois',
      '1 conteneur = 18,7 tonnes',
      'Conditionnement : sacs PP 50 kg',
    ],
    positioning: 'Nous opérons au cœur des bassins de production afin de garantir une sélection rigoureuse, une homogénéité des lots et un approvisionnement structuré adapté aux marchés internationaux.',
    positioningPoints: [
      'Sélection rigoureuse des graines décortiquées',
      'Homogénéité des lots',
      'Approvisionnement structuré et régulier',
      'Qualité adaptée aux marchés internationaux',
    ],
    specs: [
      { label: 'Produit', value: 'Arachide décortiquée' },
      { label: 'Origine', value: 'Niger (Zinder & Maradi)' },
      { label: 'Type', value: 'Graines sélectionnées et nettoyées' },
      { label: 'Conditionnement', value: 'Sacs PP 50 kg' },
      { label: 'Traitement', value: 'Décorticage, tri et nettoyage' },
    ],
    usages: [
      'Industrie agroalimentaire',
      'Transformation & huile d\'arachide',
      'Grande distribution',
      'Importateurs et grossistes',
    ],
    capacity: '1 à 3 conteneurs par mois (≈ 18,7 t/conteneur)',
    capacityPoints: [
      '1 à 3 conteneurs par mois',
      '1 conteneur = 18,7 tonnes',
      'Collecte organisée à l\'origine',
      'Décorticage et tri contrôlé',
      'Homogénéisation des lots avant export',
      'Capacité adaptée aux contrats récurrents',
    ],
    availability: 'Disponibilité selon saison de collecte',
    qualityDesc: 'Tri après décorticage, élimination des impuretés, contrôle visuel et standardisation des lots.',
    qualityPoints: [
      'Tri des graines après décorticage',
      'Élimination des impuretés et grains défectueux',
      'Contrôle visuel et homogénéité',
      'Standardisation des lots pour export',
    ],
    logistique: 'FOB Cotonou – CIF toutes destinations internationales',
    logistiquePoints: [
      'FOB : Port de Cotonou',
      'CIF : Toutes destinations internationales',
      'Gestion logistique structurée',
      'Documentation export complète',
      'Expéditions sécurisées via partenaires internationaux',
    ],
    differentiation: [
      'Arachide décortiquée de qualité export',
      'Approvisionnement structuré et régulier',
      'Volume 1 à 3 conteneurs / mois',
      'Conditionnement standard PP 50 kg',
      'Chaîne logistique organisée',
      'Flexibilité FOB / CIF',
    ],
    markets: [
      'Industries de transformation alimentaire',
      'Fabricants d\'huile d\'arachide',
      'Grandes surfaces et centrales d\'achat',
      'Importateurs et distributeurs internationaux',
    ],
    image: '/lovable-uploads/warehouse.jpeg',
    color: '#C9A96E',
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
