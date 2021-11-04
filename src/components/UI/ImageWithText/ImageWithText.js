import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import TextField from '../TextField/TextField';
import styles from './sass/ImageWithText.module.scss';

const ImageWithText = ({
  image, alt, text, textFieldClass, imageClass 
}) => (
  <div className={styles.wrapperImg}>
    <Image image={image} alt={alt} imageClass={imageClass} />
    <TextField text={text} textFieldClass={textFieldClass} />
  </div>
);

ImageWithText.defaultProps = {
  textFieldClass: '',
  imageClass: ''
};

ImageWithText.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textFieldClass: PropTypes.string,
  imageClass: PropTypes.string
};

export default ImageWithText;
