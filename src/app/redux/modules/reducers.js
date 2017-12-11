// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import earningGraph         from './earningGraph';
import sideMenu             from './sideMenu';
import userInfos            from './userInfos';
import teamMates            from './teamMates';
import views                from './views';
import userAuth             from './userAuth';

export const reducers = {
  earningGraph,
  sideMenu,
  userInfos,
  teamMates,
  views,
  userAuth
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
