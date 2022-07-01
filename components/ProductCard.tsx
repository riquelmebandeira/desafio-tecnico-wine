import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Button from './Button';
import Card from '../styles/card';

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  priceMember: PropTypes.number.isRequired,
  priceNonMember: PropTypes.number.isRequired,
};

type ProductCardProps = InferProps<typeof propTypes>;

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { image, name, price, discount, priceMember, priceNonMember } = props;

  return (
    <div className="product-container">
      <Card>
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
      </Card>
      <Button text="Adicionar" />
    </div>
  );
};

ProductCard.propTypes = propTypes;

export default ProductCard;
