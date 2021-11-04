import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Button.module.scss';

const Button = ({
  title, buttonClass, handleClick, id 
}) => (
  <button
    type="button"
    onClick={handleClick}
    className={`${styles.button} ${buttonClass ? styles[buttonClass] : ''}`}
    data-testid={id}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

Button.defaultProps = {
  id: 'button',
  buttonClass: ''
};

export default Button;
