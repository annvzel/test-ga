import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n, { appLocales } from '../../i18n';
import PageView from './PageView';
import {
  Context as PageContext,
  data
} from '../../context/layout/Page';

export default class Page extends Component {
  constructor(props) {
    super(props);
    const { i18nConfig } = data;
    this.state = {
      i18nConfig,
      changeLanguage: this.changeLanguage
    };
  }

  changeLanguage = () => {
    const nextLocaleIndex = appLocales.indexOf(i18n.language) + 1;
    const locale = nextLocaleIndex >= appLocales.length ? appLocales[0] : appLocales[nextLocaleIndex];
    i18n.changeLanguage(locale);
  }

  render() {
    const { children } = this.props;
    return (
      <PageContext.Provider value={{ ...this.state }}>
        <PageView>
          {children}
        </PageView>
      </PageContext.Provider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired
};
