import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

/**
 * I based on this answer to deal with proptypes and typescript typing:
 * https://stackoverflow.com/a/65958262
 */

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

type ImageInputProps = InferProps<typeof propTypes>;

const ImageInput: React.FC<ImageInputProps> = ({ src, alt }) => (
    <input
    type="image"
    src={ src }
    alt={alt}
    />
);

ImageInput.propTypes = propTypes;

export default ImageInput;
