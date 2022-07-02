import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

type RadioInputProps = InferProps<typeof propTypes>;

const RadioInput: React.FC<RadioInputProps> = ({ id, labelText, onClick, value }) => (
  <label htmlFor={id}>
    <input type="radio" id={id} name="price-filter" value={value} onClick={onClick}/>
    {labelText}
  </label>
);

RadioInput.propTypes = propTypes;

export default RadioInput;
