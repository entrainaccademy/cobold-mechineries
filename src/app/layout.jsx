import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SITE_CONFIG, SITE_URL } from '../lib/siteConfig';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cobolt Machineries | Precision Engineering & Machinery Solutions',
    template: '%s | Cobolt Machineries',
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: 'Cobolt Machineries | Precision Engineering & Machinery Solutions',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/blacklogotr.png',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Logo and Engineering Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobolt Machineries | Precision Engineering & Machinery Solutions',
    description: SITE_CONFIG.description,
    images: ['/blacklogotr.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'NiEAFME6vA1O4rMpSVJvT5rtj63AUF3HQyJr0xIuVEk',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-text font-sans antialiased selection:bg-accent/20 selection:text-primary overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
