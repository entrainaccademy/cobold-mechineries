import { notFound } from 'next/navigation';
import ProductDetail from '../../../views/ProductDetail';
import JsonLd from '../../../components/JsonLd';
import { productsList, getProductById, getRelatedProducts } from '../../../data/products';
import { productSchema, breadcrumbs } from '../../../lib/schema';
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
          url: typeof product.image === 'object' && product.image?.src ? product.image.src : '/slider1.webp',
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
  const jsonLdProduct = productSchema(product);
  const jsonLdBreadcrumb = breadcrumbs([
    ['Home', '/'],
    ['Products', '/products'],
    [product.name, `/products/${product.id}`],
  ]);

  return (
    <>
      <JsonLd data={jsonLdProduct} />
      <JsonLd data={jsonLdBreadcrumb} />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
}
