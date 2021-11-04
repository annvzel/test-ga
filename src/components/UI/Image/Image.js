import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image, alt, imageClass }) => (
  <img src={image} alt={alt} className={`image ${imageClass || ''}`} />
);

Image.defaultProps = {
  imageClass: ''
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageClass: PropTypes.string
};

export default Image;
