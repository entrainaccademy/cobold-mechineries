import Home from '../views/Home';
import { SITE_CONFIG, SITE_URL } from '../lib/siteConfig';

export const metadata = {
  title: 'Cobolt Machineries | Precision Engineering & Machinery Solutions',
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Cobolt Machineries | Precision Engineering & Machinery Solutions',
    description: SITE_CONFIG.description,
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: '/blacklogotr.png',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Precision Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobolt Machineries | Precision Engineering & Machinery Solutions',
    description: SITE_CONFIG.description,
    images: ['/blacklogotr.png'],
  },
};

export default function HomePage() {
  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_URL,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      logo: `${SITE_URL}/logo.png`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <Home />
    </>
  );
}
