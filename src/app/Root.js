// @flow weak

import React, {
  Component
}                               from 'react';
import {
  // Router, // using now ConnectedRouter from react-router-redux v5.x (the only one compatible react-router 4)
  Switch,
  Route
}                               from 'react-router-dom';
import { ConnectedRouter }      from 'react-router-redux';
import { Provider }             from 'react-redux';
import configureStore           from './redux/store/configureStore';
import { history }              from './redux/store/configureStore';
import App                      from './containers/app';
import ScrollTop                from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login/index';
import PageNotFound             from './views/pageNotFound';

// #region flow types
type Props = any;
type State = any;
// #endregion

const store = configureStore();

class Root extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <ScrollTop>
              <Switch>
                <Route exact path="/login" component={Login} />
                <App />
                <Route component={PageNotFound} />
              </Switch>
            </ScrollTop>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default Root;
