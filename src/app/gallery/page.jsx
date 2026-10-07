import Gallery from '../../views/Gallery';
import JsonLd from '../../components/JsonLd';
import { gallerySchema, breadcrumbs } from '../../lib/schema';
import { SITE_URL } from '../../lib/siteConfig';

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
        url: '/slider1.webp',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Visual Gallery',
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={gallerySchema} />
      <JsonLd data={breadcrumbs([['Home', '/'], ['Gallery', '/gallery']])} />
      <Gallery />
    </>
  );
}
