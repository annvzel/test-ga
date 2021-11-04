import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import TextField from '../TextField/TextField';
import styles from './sass/TextBlock.module.scss';

const TextBlock = ({
  title, textClass, text, textFieldClass 
}) => (
  <div className={styles.textContainer}>
    <Title title={title} textClass={textClass} />
    <TextField text={text} textFieldClass={textFieldClass} />
  </div>
);

TextBlock.defaultProps = {
  textClass: '',
  textFieldClass: ''
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textClass: PropTypes.string,
  textFieldClass: PropTypes.string
};

export default TextBlock;
