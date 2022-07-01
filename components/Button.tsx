import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import * as S from '../styles';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

type ButtonProps = InferProps<typeof propTypes>;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <S.Button
    type="button"
    onClick={onClick}
  >
    {text}
  </S.Button>
);

Button.propTypes = propTypes;

export default Button;
