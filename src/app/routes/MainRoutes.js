/* eslint no-process-env:0 */
import React from 'react';
import {
 Route,
 Switch
}                               from 'react-router';
import {
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
  AlertConnected,
  PaginationViewConnected
}                               from '../containers';

export const MainRoutes = () => {
  return (
    <Switch>
      <Route exact component={HomeConnected} />
      <Route path="/Dashboard/statsCard" component={StatsCardConnected} />
      <Route path="/Dashboard/earningGraph" component={EarningGraphConnected} />
      <Route path="/Dashboard/notifications" component={NotificationsConnected} />
      <Route path="/Dashboard/workProgress" component={WorkProgressConnected} />
      <Route path="/Dashboard/twitterFeed" component={TwitterFeedConnected} />
      <Route path="/Dashboard/teamMates" component={TeamMatesViewConnected} />
      <Route path="/Dashboard/todoList" component={TodoListViewConnected} />

      <Route path="/simpleTables" component={SimpleTablesConnected} />

      <Route path="/basicElements" component={BasicElementsConnected} />

      <Route path="/general" component={GeneralConnected} />
      <Route path="/general/breadcrumb" component={BreadcrumbViewConnected} />
      <Route path="/general/stat" component={StatViewConnected} />
      <Route path="/general/basicProgressBars" component={BasicProgressBarConnected} />
      <Route path="/general/tabPanels" component={TabPanelConnected} />
      <Route path="/general/stripedProgressBars" component={StripedProgressBarConnected} />
      <Route path="/general/alerts" component={AlertConnected} />
      <Route path="/general/pagination" component={PaginationViewConnected} />

      <Route path="*" component={PageNotFoundConnected} />
    </Switch>
  );
};

export default MainRoutes;
