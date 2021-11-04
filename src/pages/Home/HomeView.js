import React from 'react';
import Banner from '../../components/Banner/Banner';
import string from '../../constants/string';
import iphone from '../../assets/images/iphone12pro.png';
import iphone2 from '../../assets/images/Group_1682.png';
import styles from './sass/Home.module.scss';
import WhatWeWillOffer from '../../components/WhatWeWillOffer/WhatWeWillOffer';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';

const HomeView = () => {
  return (
    <>
      <section className={styles.banner}>
        <Banner
          title={string.title1}
          text={string.text1}
          textButton={string.textButton}
          textUnderButton={string.textUnderButton}
          alt={string.alt}
          image={iphone}
          textClass={string.textClass}
          buttonClass={string.buttonBanner}
          textSmall={string.textSmall}
          imageClass={string.imageClass}
        />
      </section>
      <section className={styles.banner2}>
        <WhatWeWillOffer />
      </section>
      <section className={styles.banner3}>
        <WhoWeAre />
      </section>
      <section className={styles.banner4}>
        <Banner
          title={string.title4}
          text={string.text5}
          textButton={string.textButton}
          textUnderButton={string.textUnderButton}
          alt={string.alt}
          image={iphone2}
          textFieldClass={string.textFieldClass2}
          textSmall={string.textSmall}
          buttonClass={string.buttonBanner}
          textClass={string.textClass3}
        />
      </section>
    </>
  );
};

export default HomeView;
