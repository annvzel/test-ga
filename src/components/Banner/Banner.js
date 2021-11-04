import React from 'react';
import PropTypes from 'prop-types';
import Title from '../UI/Title/Title';
import styles from './sass/Banner.module.scss';
import TextField from '../UI/TextField/TextField';
import Image from '../UI/Image/Image';
import Button from '../UI/Button/Button';

const Banner = ({
  title,
  text,
  textButton,
  textUnderButton,
  alt,
  image,
  textClass,
  buttonClass,
  textSmall,
  textFieldClass,
  imageClass
}) => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <Title title={title} textClass={textClass} />
      <TextField text={text} textFieldClass={textFieldClass} />
      <Button title={textButton} buttonClass={buttonClass} />
      <div className={styles.textWrapper}>
        <TextField text={textUnderButton} textFieldClass={textSmall} />
      </div>
    </div>
    <Image image={image} alt={alt} imageClass={imageClass} />
  </div>
);

Banner.defaultProps = {
  textClass: '',
  buttonClass: '',
  textSmall: '',
  textFieldClass: '',
  imageClass: ''
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  textUnderButton: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  textClass: PropTypes.string,
  textFieldClass: PropTypes.string,
  buttonClass: PropTypes.string,
  textSmall: PropTypes.string,
  imageClass: PropTypes.string
};

export default Banner;
