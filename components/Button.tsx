import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import PrimaryButton from '../styles/primaryButton';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

type ButtonProps = InferProps<typeof propTypes>;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <PrimaryButton
    type="button"
    onClick={onClick}
  >
    {text}
  </PrimaryButton>
);

Button.propTypes = propTypes;

export default Button;
