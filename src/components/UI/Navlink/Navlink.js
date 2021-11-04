import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './sass/Navlink.module.scss';

const Navlink = ({ title, url, linkClass }) => (
  <NavLink to={url} className={`${styles.link} ${linkClass || ''}`}>{title}</NavLink>
);

Navlink.defaultProps = {
  linkClass: '',
  url: '/'
};

Navlink.propTypes = {
  title: PropTypes.string.isRequired,
  linkClass: PropTypes.string,
  url: PropTypes.string
};

export default Navlink;
