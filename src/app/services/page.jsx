import Services from '../../views/Services';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'Machinery Services & Support | Steel Fabrication & AMC',
  description: 'Certified machinery services: custom stainless steel fabrication, industrial machinery manufacturing, import/export logistics, engineering consultation, and 24/7 AMC support.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Machinery Support & Services | Cobolt Machineries',
    description: 'Precision engineering services, custom stainless steel fabrication, and preventive maintenance programs.',
    url: `${SITE_URL}/services`,
    images: [
      {
        url: '/service1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cobolt Industrial Machinery Services',
      },
    ],
  },
};

export default function ServicesPage() {
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
        name: 'Services & Support',
        item: `${SITE_URL}/services`,
      },
    ],
  };

  const jsonLdServices = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Industrial Machinery Maintenance & Steel Fabrication',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cobolt Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stainless Steel Fabrication',
            description: 'Custom kitchen layout planning, 304/316 food-grade stainless steel fabrication and alignment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Annual Maintenance Contracts (AMC)',
            description: 'Preventive maintenance, scheduled servicing, and emergency breakdown support.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Machinery Manufacturing & Consulting',
            description: 'End-to-end industrial machinery design, development, and engineering consulting.',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />
      <Services />
    </>
  );
}
