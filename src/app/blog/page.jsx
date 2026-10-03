import Blog from '../../views/Blog';
import JsonLd from '../../components/JsonLd';
import { blogIndexSchema, breadcrumbs } from '../../lib/schema';
import { SITE_URL } from '../../lib/siteConfig';

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
  return (
    <>
      <JsonLd data={blogIndexSchema} />
      <JsonLd data={breadcrumbs([['Home', '/'], ['Blog', '/blog']])} />
      <Blog />
    </>
  );
}
