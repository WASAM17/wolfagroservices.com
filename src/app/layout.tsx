import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Wolf Agro Services – Fournisseur agro-export structuré, Niger',
  description:
    "Wolf Agro Services est un fournisseur structuré à l'origine, spécialisé dans l'export de produits agricoles du Niger : gomme arabique, sésame, oignon de Galmi, arachide. Sourcing direct, qualité contrôlée, logistique internationale FOB/CIF.",
  authors: [{ name: 'Wolf Agro Services' }],
  keywords: [
    'gomme arabique Niger',
    'sésame Niger',
    'oignon Galmi',
    'arachide décortiquée',
    'export agroalimentaire Niger',
    'agro-export Afrique',
    'fournisseur agricole Niger',
  ],
  openGraph: {
    title: 'Wolf Agro Services – Fournisseur agro-export, Niger',
    description:
      'Sourcing direct, qualité contrôlée, logistique internationale. 800 tonnes exportées en 2025, 10 pays partenaires.',
    type: 'website',
    url: 'https://wolfagroservices.com/',
    images: [
      {
        url: 'https://www.wolfagroservices.com/lovable-uploads/80dafe9d-b856-43df-af4f-f65a5bd6e3c5.png',
      },
    ],
  },
  verification: {
    google: '4rkY2ec33O59WK9g80XpOKNdyF3SoRBSDdUUEATrcrs',
  },
  icons: {
    icon: '/lovable-uploads/80dafe9d-b856-43df-af4f-f65a5bd6e3c5.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wolf Agro Services',
              url: 'https://wolfagroservices.com/',
              logo: 'https://www.wolfagroservices.com/lovable-uploads/80dafe9d-b856-43df-af4f-f65a5bd6e3c5.png',
              email: 'contact@wolfagroservices.com',
              telephone: '+22720353509',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Plateau',
                addressLocality: 'Niamey',
                addressCountry: 'NE',
              },
              description:
                "Fournisseur structuré à l'origine, spécialisé dans l'export de produits agricoles du Niger vers les marchés internationaux.",
              sameAs: ['https://www.facebook.com/wolfagroservices'],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
