import { GetServerSideProps } from 'next';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

export default function Home({ products, totalPages }) {
  return (
    <div>
      <Header />
      <ProductList products={products} totalPages={totalPages}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query: { page = 1 } }) => {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`);

  const data = await response.json();

  return {
    props: {
      products: data.items,
      totalPages: data.totalPages,
    },
  };
};
