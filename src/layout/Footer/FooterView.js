import React from 'react';
import styles from './sass/Footer.module.scss';
import TextField from '../../components/UI/TextField/TextField';
import string from '../../constants/string';
import ImageList from '../../lists/ImageData';
import LinkData from '../../lists/LinksData';
import LinkList from '../../components/UI/LinkList/LinkList';
import InputList from '../../components/UI/InputList/InputList';

const FooterView = () => (
  <>
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <TextField text={string.textFooter} textFieldClass={string.textFieldClass1} />
        <LinkList data={LinkData} />
        <InputList data={ImageList} />
      </div>
    </footer>
  </>

);

export default FooterView;
