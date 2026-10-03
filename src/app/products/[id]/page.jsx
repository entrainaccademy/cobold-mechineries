import { notFound } from 'next/navigation';
import ProductDetail from '../../../views/ProductDetail';
import { productsList, getProductById, getRelatedProducts } from '../../../data/products';
import { SITE_CONFIG, SITE_URL } from '../../../lib/siteConfig';

export async function generateStaticParams() {
  return productsList.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found | Cobolt Machineries',
      description: 'The requested machinery or equipment could not be found in our catalog.',
    };
  }

  const title = `${product.name} | Cobolt Machineries`;
  const description = product.description
    ? `${product.description.slice(0, 155)}...`
    : `Explore specifications and details for ${product.name} from Cobolt Machineries.`;
  const canonicalUrl = `${SITE_URL}/products/${product.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: typeof product.image === 'object' && product.image?.src ? product.image.src : '/slider1.jpg',
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, 3);

  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Cobolt Machineries',
    },
    url: `${SITE_URL}/products/${product.id}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Cobolt Machineries',
      },
    },
  };

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
        name: 'Products',
        item: `${SITE_URL}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `${SITE_URL}/products/${product.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
}
