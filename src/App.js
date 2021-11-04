import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './layout/Page/Page';
import Home from './pages/Home/Home';
import ReferFriends from './pages/ReferFriends/ReferFriends';
import './i18n';
import './styles/globals.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Router history={this.history}>
        <Page>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/refer" component={ReferFriends} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
