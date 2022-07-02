import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { returnIcon } from '../../assets';
import QtyButton from '../../components/QtyButton';
import { BASE_URL, pathResolver } from '../../utils';

export default function Wine({ wine }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <a>
        <img src={returnIcon} alt="Botão de retroceder" onClick={() => router.back()}/>
        Voltar
      </a>
      <div>
        <img src={wine.image} alt={`Foto do vinho ${name}`} />
        <h1>{name}</h1>
        <div className="tags">
          <img src={wine.flag} alt={`Bandeira de ${wine.country}`} />
          <span>{wine.country}</span>
          <span>{wine.type}</span>
          <span>{wine.classification}</span>
          <span>{wine.rating}</span>
          <span>{wine.avaliations}</span>
        </div>
        <span>{`R$${wine.priceMember}`}</span>
        <span>{`R$${wine.priceNonMember}`}</span>
        <h2>Comentário do Sommelier</h2>
        <span>{wine.sommelierComment}</span>
        <QtyButton />
      </div>
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
