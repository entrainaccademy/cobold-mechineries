import About from '../../views/About';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'About Us | Precision Engineering Excellence',
  description: 'Learn about Cobolt Machineries - our history since 2001, vision, values, industrial facilities in Manjeri, Kerala, and commitment to manufacturing excellence.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us | Cobolt Machineries',
    description: 'Pioneering precision manufacturing and industrial machinery solutions since 2001.',
    url: `${SITE_URL}/about`,
    images: [
      {
        url: '/hm_about1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Factory Floor',
      },
    ],
  },
};

export default function AboutPage() {
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
        name: 'About Us',
        item: `${SITE_URL}/about`,
      },
    ],
  };

  const jsonLdAbout = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Cobolt Machineries',
    description: 'Cobolt Machineries is a premium global manufacturer of high-end industrial machinery and food processing equipment.',
    mainEntity: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      foundingDate: '2001',
      url: SITE_URL,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <About />
    </>
  );
}
