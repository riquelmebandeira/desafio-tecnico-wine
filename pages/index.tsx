import { GetServerSideProps } from 'next';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Aside from '../components/Aside';
import * as S from '../styles';

export default function Home({ products, totalPages }) {
  return (
    <>
      <Header />
      <S.Main>
        <Aside />
        <ProductList products={products} totalPages={totalPages}/>
      </S.Main>
    </>
  );
}

export const getServerSideProps:
GetServerSideProps = async ({ query: { page = 1, name, filter } }) => {
  const url = name ? `https://wine-back-test.herokuapp.com/products?page=${page}&name=${name}&limit=9&filter=${filter}}`
    : `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&filter=${filter}`;

  const response = await fetch(url);

  const data = await response.json();

  return {
    props: {
      products: data.items,
      totalPages: data.totalPages,
    },
  };
};
