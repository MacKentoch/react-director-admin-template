// @flow weak

import React, {
  Component
}                               from 'react';
import {
  Router,
  Switch,
  Route
}                               from 'react-router-dom';
import { history }              from './redux/store/configureStore';
import App                      from './containers/app/App';
import ScrollTop                from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login/index';
import PageNotFound             from './views/pageNotFound';

// #region flow types
type Props = any;
type State = any;
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <div>
        <Router history={history}>
          <ScrollTop>
            <Switch>
              <Route exact path="/login" component={Login} />
              <App />
              <Route component={PageNotFound} />
            </Switch>
          </ScrollTop>
        </Router>
      </div>
    );
  }
}

export default Root;
