import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Link from 'next/link';
import Button from './Button';
import * as S from '../styles';

const propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  priceMember: PropTypes.number.isRequired,
  priceNonMember: PropTypes.number.isRequired,
};

type ProductCardProps = InferProps<typeof propTypes>;

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { id, image, name, price, discount, priceMember, priceNonMember } = props;

  return (
    <Link href={`/vinhos/${id}`}>
      <div className="product-container">
        <S.Card>
          <img src={image} alt="Foto do produto" />
          <a>{name}</a>
          <div className="discount-container">
            <span>{`R$ ${price} `}</span>
            <span>{`${discount}% Off`}</span>
          </div>
          <span className="member-price">Sócio Wine
            <span className="price-highlight"> R$ {priceMember}</span>
          </span>
          <span className="non-member-price">{`Não Sócio R$ ${priceNonMember}`}</span>
        </S.Card>
        <Button text="Adicionar" />
      </div>
    </Link>
  );
};

ProductCard.propTypes = propTypes;

export default ProductCard;
