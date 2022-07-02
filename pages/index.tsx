import { GetServerSideProps } from 'next';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Aside from '../components/Aside';
import * as S from '../styles';
import { BASE_URL, pathResolver } from '../utils';

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
  const url = BASE_URL + pathResolver(page, name, filter);

  const response = await fetch(url);

  const data = await response.json();

  return {
    props: {
      products: data.items,
      totalPages: data.totalPages,
    },
  };
};
