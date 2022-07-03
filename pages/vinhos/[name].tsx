import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { returnIcon, starIcon } from '../../assets';
import ProductAdder from '../../components/ProductAdder';
import { BASE_URL, pathResolver } from '../../utils';
import * as S from '../../styles';
import Header from '../../components/Header';

export default function Wine({ wine }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
    <Header />
    <S.ProductDetails>
      <button className="return-button" onClick={() => router.back()}>
        <img src={returnIcon} alt="Botão de retroceder"/>
        Voltar
      </button>
      <div className="wine-details">
        <img src={wine.image} alt={`Foto do vinho ${name}`} />
        <section>
          <div className="headers">
            <h1>{name}</h1>
            <div className="tags">
              <img src={wine.flag} alt={`Bandeira do país ${wine.country}`} />
              <span>{wine.country}</span>
              <span>{wine.type}</span>
              <span>{wine.classification}</span>
              <div className="rating">
                <span>{wine.rating}</span>
                <img src={starIcon} alt="Estrela de avaliação" />
              </div>
              <span>{`(${wine.avaliations})`}</span>
            </div>
          </div>
          <div className="price-container">
            <span>{`R$ ${wine.priceMember}`}</span>
            <span>{`Não sócio R$ ${wine.priceNonMember}/UN.`}</span>
          </div>
          <div className="comment-container">
            <h2>Comentário do Sommelier</h2>
            <span>{wine.sommelierComment}</span>
          </div>
          <ProductAdder />
        </section>
      </div>
    </S.ProductDetails>
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
      wine: data.items[0],
    },
  };
};
