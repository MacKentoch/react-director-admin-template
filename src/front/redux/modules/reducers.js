// @flow

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import earningGraph from './earningGraph';
import sideMenu from './sideMenu';
import userInfos from './userInfos';
import teamMates from './teamMates';
import views from './views';
import userAuth from './userAuth';

export const reducers = {
  earningGraph,
  sideMenu,
  userInfos,
  teamMates,
  views,
  userAuth,
};

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });
