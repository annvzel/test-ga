import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function PageView({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

PageView.propTypes = {
  children: PropTypes.element.isRequired
};
