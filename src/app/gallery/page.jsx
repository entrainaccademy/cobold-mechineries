import Gallery from '../../views/Gallery';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'Machinery & Facility Gallery | Visual Engineering Archive',
  description: 'Visual archive of Cobolt Machineries: heavy fabrication yards, vertical CNC lathe calibration, hydraulic press installations, and clean assembly workshops.',
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
  openGraph: {
    title: 'Machinery & Facility Gallery | Cobolt Machineries',
    description: 'Explore the fabrication yards, CNC tooling setups, and installation projects of Cobolt Machineries.',
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: '/slider1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Visual Gallery',
      },
    ],
  },
};

export default function GalleryPage() {
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
        name: 'Gallery',
        item: `${SITE_URL}/gallery`,
      },
    ],
  };

  const jsonLdGallery = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Cobolt Machineries Visual Archive',
    description: 'Photos and project visuals from the Cobolt Machineries fabrication yards and client installations.',
    url: `${SITE_URL}/gallery`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGallery) }}
      />
      <Gallery />
    </>
  );
}
