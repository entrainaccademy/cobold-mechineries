import Contact from '../../views/Contact';
import JsonLd from '../../components/JsonLd';
import { SITE, ORG_ID, WEBSITE_ID, breadcrumbs } from '../../lib/schema';
import { SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'Contact Us & Factory Location | Get Quote & Technical Consultation',
  description: 'Connect with Cobolt Machineries engineers for equipment quotes, custom machinery specifications, or emergency service callouts. Located in Veemboor, Manjeri, Kerala.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Cobolt Machineries',
    description: 'Get in touch with Cobolt Machineries for custom industrial equipment quotes and 24/7 AMC support.',
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: '/blacklogotr.png',
        width: 1200,
        height: 630,
        alt: 'Contact Cobolt Machineries',
      },
    ],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE}/contact#webpage`,
  url: `${SITE}/contact`,
  name: 'Contact Us | Cobolt Machineries',
  description: 'Contact information, inquiry form, and plant facility location in Kerala.',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbs([['Home', '/'], ['Contact', '/contact']])} />
      <Contact />
    </>
  );
}
