import About from '../../views/About';
import JsonLd from '../../components/JsonLd';
import { SITE, ORG_ID, WEBSITE_ID, breadcrumbs } from '../../lib/schema';
import { SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'About Us | Precision Engineering Excellence',
  description: 'Learn about Cobolt Machineries - industrial machinery manufacturing, custom stainless steel fabrication, engineering solutions, and facility in Manjeri, Kerala.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us | Cobolt Machineries',
    description: 'Pioneering precision manufacturing and industrial machinery solutions.',
    url: `${SITE_URL}/about`,
    images: [
      {
        url: '/hm_about1.webp',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Factory Floor',
      },
    ],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE}/about#webpage`,
  url: `${SITE}/about`,
  name: 'About Us | Cobolt Machineries',
  description: 'Learn about Cobolt Machineries - precision engineering, industrial machinery solutions, food processing equipment, and manufacturing excellence in Kerala.',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbs([['Home', '/'], ['About Us', '/about']])} />
      <About />
    </>
  );
}
