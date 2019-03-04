// @flow

import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import MainRoutes from './routes/MainRoutes';
import Login from './views/login/index';
import PageNotFound from './views/pageNotFound';

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
// $FlowIgnore
const store = configureStore();
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollTop>
            <Switch>
              <Route exact path="/login" component={Login} />
              <MainRoutes />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ScrollTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
