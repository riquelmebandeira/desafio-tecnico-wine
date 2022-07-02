import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

type QtyButtonProps = InferProps<typeof propTypes>;

const QtyButton: React.FC<QtyButtonProps> = () => {
  const [quantity, setQty] = useState(1);

  return (
    <div>
      <button onClick={() => setQty(quantity + 1)}>+</button>
      <span>{quantity}</span>
      <button onClick={() => quantity > 1 && setQty(quantity - 1)}>-</button>
      <button>Adicionar</button>
    </div>
  );
};

QtyButton.propTypes = propTypes;

export default QtyButton;
