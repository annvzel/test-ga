import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import HomeView from './HomeView';

const Home = ({ t }) => (
  <HomeView title={t('homePage')} />
);

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Home);
