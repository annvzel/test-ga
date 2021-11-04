import React from 'react';
import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import logo from '../../assets/images/left_nav.svg';
import styles from './sass/Header.module.scss';
import string from '../../constants/string';

const HeaderView = () => (
  <header className={styles.appHeader}>
    <Logo logo={logo} />
    <Button buttonClass={string.buttonHeader} title={string.textButton} />
  </header>
);

export default HeaderView;
