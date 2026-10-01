import Blog from '../../views/Blog';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'Technical Journals & Machinery Insights | Industrial Engineering Blog',
  description: 'Expert engineering articles: 5 essential checks for high-speed spindles, PLC data integration with ERP, hydraulic maintenance protocols, and smart factory automation.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Technical Journals & Machinery Insights | Cobolt Machineries',
    description: 'Expert advice, maintenance guides, and industrial automation journals from Cobolt Machineries engineers.',
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: '/slider3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Engineering Insights',
      },
    ],
  },
};

export default function BlogPage() {
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
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Cobolt Machineries Technical Journals',
    description: 'Practical guides and deep-dives on CNC machinery maintenance, PLC integration, and heavy steel fabrication.',
    url: `${SITE_URL}/blog`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
      <Blog />
    </>
  );
}
