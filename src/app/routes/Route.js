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
  EarningGraphConnected,
  NotificationsConnected,
  WorkProgressConnected,
  TwitterFeedConnected,
  TeamMatesViewConnected,
  TodoListViewConnected,
  BreadcrumbViewConnected,
  StatViewConnected,
  BasicProgressBarConnected,
  TabPanelConnected,
  StripedProgressBarConnected,
  AlertConnected
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
            <IndexRoute component={HomeConnected} onEnter={scrollToTop} />
            <Route path="/Dashboard/statsCard" component={StatsCardConnected} onEnter={scrollToTop} />
            <Route path="/Dashboard/earningGraph" component={EarningGraphConnected} onEnter={scrollToTop}  />
            <Route path="/Dashboard/notifications" component={NotificationsConnected} onEnter={scrollToTop}  />
            <Route path="/Dashboard/workProgress" component={WorkProgressConnected} onEnter={scrollToTop} />
            <Route path="/Dashboard/twitterFeed" component={TwitterFeedConnected} onEnter={scrollToTop}  />
            <Route path="/Dashboard/teamMates" component={TeamMatesViewConnected} onEnter={scrollToTop}  />
            <Route path="/Dashboard/todoList" component={TodoListViewConnected} onEnter={scrollToTop}  />

            <Route path="/simpleTables" component={SimpleTablesConnected} onEnter={scrollToTop} />

            <Route path="/basicElements" component={BasicElementsConnected} onEnter={scrollToTop}  />

            <Route path="/general" component={GeneralConnected} onEnter={scrollToTop} />
            <Route path="/general/breadcrumb" component={BreadcrumbViewConnected} onEnter={scrollToTop}  />
            <Route path="/general/stat" component={StatViewConnected} onEnter={scrollToTop}  />
            <Route path="/general/basicProgressBars" component={BasicProgressBarConnected} onEnter={scrollToTop}  />
            <Route path="/general/tabPanels" component={TabPanelConnected} onEnter={scrollToTop} />
            <Route path="/general/stripedProgressBars" component={StripedProgressBarConnected} onEnter={scrollToTop}  />
            <Route path="/general/alerts" component={AlertConnected} onEnter={scrollToTop}  />

            <Route path="*" component={PageNotFoundConnected} onEnter={scrollToTop}  />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};

function scrollToTop() {
  window.scrollTo(0, 0);
}
