import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import TextField from '../TextField/TextField';
import Image from '../Image/Image';
import styles from './sass/Card.module.scss';

const Card = ({
  image, alt, title, text, textFieldClass, textClass, imageClass
}) => (
  <div className={styles.cardItem}>
    <Image image={image} alt={alt} imageClass={imageClass} />
    <Title title={title} textClass={textClass} />
    <TextField text={text} textFieldClass={textFieldClass} />
  </div>
);

Card.defaultProps = {
  textFieldClass: '',
  textClass: '',
  imageClass: ''
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textFieldClass: PropTypes.string,
  textClass: PropTypes.string,
  imageClass: PropTypes.string
};

export default Card;
