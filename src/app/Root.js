// @flow weak

import React, {
  Component
}                               from 'react';
// static website: uncomment createHashHistory, otherwise uncomment createBrowserHistory
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
}                               from 'react-router-dom';
// static website: uncomment createHashHistory, otherwise uncomment createBrowserHistory
import {
// createBrowserHistory as createHistory,
  createHashHistory as createHistory
}                              from 'history';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import App                      from './containers/app/App';
import ScrollTop                from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login/index';
import PageNotFound             from './views/pageNotFound';

const store           = configureStore();
const history         = createHistory();
const syncedHistory   = syncHistoryWithStore(history, store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            <ScrollTop>
              <Switch>
                <Route exact path="/login" component={Login} />
                <App />
                <Route component={PageNotFound} />
              </Switch>
            </ScrollTop>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
