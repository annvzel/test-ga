import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import string from '../../../constants/string';
import styles from './sass/CardList.module.scss';

const CardList = ({ data }) => (
  <div className={styles.containerCard}>
    {data.map((item) => (
      <Card
        image={item.image}
        alt={item.alt}
        title={item.title}
        text={item.text}
        textFieldClass={string.textFieldClassCard}
        textClass={string.textClass2}
      />
    ))}
  </div>
);

CardList.propTypes = {
  data: PropTypes.shape.isRequired
};

export default CardList;
