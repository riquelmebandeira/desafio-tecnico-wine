import { GetStaticProps } from 'next';
import ProductCard from '../components/ProductCard';
import WineHeader from '../components/WineHeader';
import ProductList from '../styles/productList';

export default function Home({ products }) {
  return (
    <div>
      <WineHeader />
      <ProductList>
        {
          products.map((data, index) => <ProductCard key={index} {...data}/>)
        }
      </ProductList>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9');

  const data = await response.json();

  return {
    props: {
      products: data.items,
    },
    revalidate: 60 * 60,
  };
};
