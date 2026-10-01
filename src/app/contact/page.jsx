import { Suspense } from 'react';
import Contact from '../../views/Contact';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

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

export default function ContactPage() {
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
        name: 'Contact Us',
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  const jsonLdContact = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Cobolt Machineries',
    description: 'Contact information, inquiry form, and plant facility location in Kerala.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.legalName,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.streetAddress,
        addressLocality: SITE_CONFIG.address.addressLocality,
        addressRegion: SITE_CONFIG.address.addressRegion,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.addressCountry,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-400">Loading contact information...</div>}>
        <Contact />
      </Suspense>
    </>
  );
}
