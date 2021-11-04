import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Input.module.scss';

const Input = ({
  inputClass, placeholder, onChange, onClick, type, alt, src 
}) => (
  <input
    className={`${styles.inputImg} ${inputClass || ''}`}
    placeholder={placeholder}
    onChange={onChange}
    onClick={onClick}
    type={type}
    alt={alt}
    src={src}
  />
);

Input.defaultProps = {
  inputClass: '',
  placeholder: '',
  onChange: () => {},
  onClick: () => {},
  alt: '',
  src: '',
  type: ''
};

Input.propTypes = {
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  alt: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string
};

export default Input;
