import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './sass/Logo.module.scss';
import Image from '../Image/Image';

const Logo = ({ logo, url }) => (
  <Link to={url}><Image image={logo} alt="logo" className={styles.logo} /></Link>
);

Logo.defaultProps = {
  url: '/'
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Logo;
