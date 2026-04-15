'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductsSection = () => {
  const { t } = useTranslation();

  const products: Product[] = [
    {
      id: 'sesame',
      name: t.nav.sesame,
      description: '',
      image: 'https://nairametrics.com/wp-content/uploads/2018/07/sesame-seeds.jpg'
    },
    {
      id: 'peanuts',
      name: t.nav.peanut,
      description: '',
      image: 'https://www.planetesante.ch/var/ezdemo_site/storage/images/media/images/00-rubriques/nutrition-alimentation/allergies_arachide/33161-1-eng-GB/allergies_arachide_gallerylarge.jpg'
    },
    {
      id: 'gum-arabic',
      name: t.nav.gumArabic,
      description: '',
      image: 'https://www.anipex.org/images/gum-arabic-1.jpg'
    },
    {
      id: 'purple-onion',
      name: t.nav.onion,
      description: '',
      image: 'https://www.investirauburkina.net/images/articles/culture-maraichere-oignon-rentable.jpg'
    }
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-wolf-beige/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-wolf-brown mb-2">
                  {product.name}
                </h3>
                <Link href={`/produits/${product.id}`} className="block">
                  <Button
                    variant="outline"
                    className="w-full border-wolf-green text-wolf-green hover:bg-wolf-green hover:text-white transition-colors text-sm md:text-base"
                  >
                    {t.common.learnMore}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
