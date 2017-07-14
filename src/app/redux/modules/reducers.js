// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import earningGraph         from './earningGraph';
import sideMenu             from './sideMenu';
import userInfos            from './userInfos';
import teamMates            from './teamMates';
import views                from './views';

export const reducers = {
  earningGraph,
  sideMenu,
  userInfos,
  teamMates,
  views
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
