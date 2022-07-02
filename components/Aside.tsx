import React from 'react';
import { useRouter } from 'next/router';
import * as S from '../styles';
import RadioInput from './RadioInput';

const Aside: React.FC = () => {
  const router = useRouter();
  const { query: { name } } = router;

  const handleClick = (event) => {
    const { target: { value } } = event;

    const url = name ? `/?page=1&name=${name}&filter=${value}&limit=9`
      : `/?page=1&filter=${value}&limit=9`;

    router.push(url);
  };

  return (
    <S.Aside>
      <h3 className="aside-title">Refine sua busca</h3>
      <section className="price-filters">
        <h3 className="price-filters-title">Por preço</h3>
        <RadioInput id="first" value="0-40" onClick={handleClick} labelText="Até R$40" />
        <RadioInput id="second" value="40-60" onClick={handleClick} labelText="R$40 A R$60" />
        <RadioInput id="third" value="100-200" onClick={handleClick} labelText="R$100 A R$200" />
        <RadioInput id="fourth" value="200-500" onClick={handleClick} labelText="R$200 A R$500" />
        <RadioInput id="fifth" value="500-500" onClick={handleClick} labelText="Acima de R$500" />
      </section>
    </S.Aside>
  );
};

export default Aside;
