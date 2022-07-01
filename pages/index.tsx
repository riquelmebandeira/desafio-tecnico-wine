import { GetServerSideProps } from 'next';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import WineHeader from '../components/WineHeader';
import Pagination from '../styles/pagination';
import ProductList from '../styles/productList';

export default function Home({ products, totalPages }) {
  return (
    <div>
      <WineHeader />
      <ProductList>
        {
          products.map((data, index: number) => <ProductCard key={index} {...data}/>)
        }
        <Pagination>
          {
            Array(totalPages).fill(1).map((_, index) => (
              <Link href={`/?page=${index + 1}`}>
                <a>{index + 1}</a>
              </Link>
            ))
          }
        </Pagination>
      </ProductList>
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
