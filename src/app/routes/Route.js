/* eslint no-process-env:0 */
import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
  // browserHistory
 }                              from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  App,
  HomeConnected,
  SimpleTablesConnected,
  BasicElementsConnected,
  GeneralConnected,
  PageNotFoundConnected,
  StatsCardConnected,
  EarningGraphConnected
}                               from '../containers';
import configureStore           from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);

export const Routes = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={syncedHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={HomeConnected} />
            <Route path="/Dashboard/statsCard" component={StatsCardConnected} />
            <Route path="/Dashboard/earningGraph" component={EarningGraphConnected} />
            
            <Route path="/simpleTables" component={SimpleTablesConnected} />

            <Route path="/basicElements" component={BasicElementsConnected} />

            <Route path="/general" component={GeneralConnected} />

            <Route path="*" component={PageNotFoundConnected} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};
