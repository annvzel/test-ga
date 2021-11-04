import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '../UI/TextField/TextField';
import string from '../../constants/string';
import creative from '../../assets/images/Creative.jpg';
import styles from './sass/WhoWeAre.module.scss';
import Arrow from '../UI/Arrow/Arrow';
import ImageWithText from '../UI/ImageWithText/ImageWithText';
import TextBlock from '../UI/TextBlock/TextBlock';

const WhoWeAre = ({ url }) => (
  <div className={styles.wrapperBanner}>
    <ImageWithText
      image={creative}
      alt={string.alt2}
      text={string.text4}
      textFieldClass={string.textOnImage}
    />
    <div>
      <TextBlock
        title={string.title3}
        textClass={string.textClass3}
        text={string.text3}
      />
      <div className={styles.link}>
        <Link to={url}>
          <TextField
            text={string.textLink}
            textFieldClass={string.textFieldClassLink}
          />
          <Arrow />
        </Link>
      </div>
    </div>
  </div>
);

WhoWeAre.defaultProps = {
  url: '/'
};

WhoWeAre.propTypes = {
  url: PropTypes.string
};

export default WhoWeAre;
