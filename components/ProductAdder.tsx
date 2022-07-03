import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import * as S from '../styles';
import { handleCartProduct } from '../utils';

const propTypes = {
  product: PropTypes.objectOf(PropTypes.string),
};

type QtyButtonProps = InferProps<typeof propTypes>;

const ProductAdder: React.FC<QtyButtonProps> = ({ product }) => {
  const [quantity, setQty] = useState(1);

  return (
    <S.ProductAdder>
      <div className="quantity-selectors">
        <button onClick={() => quantity > 1 && setQty(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQty(quantity + 1)}>+</button>
      </div>

      <button
        className="add-button"
        onClick={() => handleCartProduct(product, quantity)}
      >
        Adicionar
      </button>
    </S.ProductAdder>
  );
};

ProductAdder.propTypes = propTypes;

export default ProductAdder;
