import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/TextField.module.scss';

const TextField = ({ text, textFieldClass }) => (
  <span className={`${styles.textField} ${textFieldClass ? styles[textFieldClass] : ''}`}>
    {text}
  </span>
);

TextField.defaultProps = {
  textFieldClass: ''
};

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  textFieldClass: PropTypes.string
};

export default TextField;
