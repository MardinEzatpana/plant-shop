import Page from '../src/components/Page';
import ProductCard from '../src/components/ProductCard';
import { getProducts } from '../src/lib/products';

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS)
  };
}

export default function Home({products}) {
  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  )
}
