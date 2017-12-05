// flow weak

import {
  createStore,
  applyMiddleware,
  compose
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import { routerMiddleware }     from 'react-router-redux';
// #region import createHistory from hashHistory or BrowserHistory:
import createHistory            from 'history/createHashHistory';
// import createHistory            from 'history/createBrowserHistory';
// #endregion
import reducer                  from '../modules/reducers';
import { localStorageManager }  from '../middleware';

export const history = createHistory();


// createStore : enhancer
const enhancer = compose(
  applyMiddleware(
    localStorageManager,
    routerMiddleware(history),
    thunkMiddleware
  )
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
