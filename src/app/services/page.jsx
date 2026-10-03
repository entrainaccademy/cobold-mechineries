import Services from '../../views/Services';
import JsonLd from '../../components/JsonLd';
import { services, serviceSchema, breadcrumbs } from '../../lib/schema';
import { SITE_URL } from '../../lib/siteConfig';

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
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': services.map(serviceSchema),
        }}
      />
      <JsonLd data={breadcrumbs([['Home', '/'], ['Services', '/services']])} />
      <Services />
    </>
  );
}
