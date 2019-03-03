// flow weak

import {
  createStore,
  applyMiddleware
}                               from 'redux';
import { createLogger }         from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import { routerMiddleware }     from 'react-router-redux';
import { composeWithDevTools }  from 'redux-devtools-extension';
import fetchMiddleware          from '../middleware/fetchMiddleware';
// #region import createHistory from hashHistory or BrowserHistory:
import createHistory            from 'history/createHashHistory';
// import createHistory            from 'history/createBrowserHistory';
// #endregion
import reducer                  from '../modules/reducers';
import { localStorageManager }  from '../middleware';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    localStorageManager,
    thunkMiddleware,
    fetchMiddleware,
    routerMiddleware(history),
    loggerMiddleware
  )
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }
  return store;
}
