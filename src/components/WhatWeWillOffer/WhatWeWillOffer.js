import React from 'react';
import string from '../../constants/string';
import CardList from '../UI/CardList/CardList';
import styles from './sass/WhatWeWillOffer.module.scss';
import TextBlock from '../UI/TextBlock/TextBlock';
import CardData from '../../lists/CardsData';

const WhatWeWillOffer = () => (
  <div className={styles.wrapperBanner}>
    <TextBlock
      title={string.title2}
      textClass={string.textClass1}
      textFieldClass={string.textFieldClass3}
      text={string.text2}
    />
    <CardList data={CardData} />
  </div>
);

export default WhatWeWillOffer;
