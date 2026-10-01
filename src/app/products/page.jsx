import { Suspense } from 'react';
import Products from '../../views/Products';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'Products & Machinery Catalog | Commercial Kitchen & Processing Equipment',
  description: 'Explore Cobolt Machineries industrial catalog: heavy-duty dough mixers, commercial open fryers, stainless steel fabrication, food preparation, and bakery machinery.',
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    title: 'Products & Machinery Catalog | Cobolt Machineries',
    description: 'High-precision industrial machinery, stainless steel fabrication, and food processing equipment.',
    url: `${SITE_URL}/products`,
    images: [
      {
        url: '/slider1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cobolt Industrial Machinery Catalog',
      },
    ],
  },
};

export default function ProductsPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products & Machinery',
        item: `${SITE_URL}/products`,
      },
    ],
  };

  const jsonLdCatalog = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cobolt Machineries Product Catalog',
    description: 'Commercial food preparation machinery, dough mixers, open fryers, and custom steel fabrications.',
    url: `${SITE_URL}/products`,
    numberOfItems: 7,
    itemListElement: [
      {
        '@type': 'Product',
        position: 1,
        name: 'DH-F Frequency Changer Dough Mixer',
        category: 'Food Preparation Machines',
        description: 'Heavy duty stainless steel meat mincer and dough mixer.',
      },
      {
        '@type': 'Product',
        position: 2,
        name: 'Table Top Food Mixer',
        category: 'Food Preparation Machines',
        description: 'Multi-function slicing, dicing, shredding, and planetary stand mixer.',
      },
      {
        '@type': 'Product',
        position: 3,
        name: '2 Split Open Fryer OFG321-322-323',
        category: 'Cooking Equipments',
        description: 'Commercial electric and gas pressure fryers for high-capacity frying.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCatalog) }}
      />
      <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-400">Loading catalog...</div>}>
        <Products />
      </Suspense>
    </>
  );
}
