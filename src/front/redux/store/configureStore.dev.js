// @flow

// #region imports
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import { routerMiddleware } from 'react-router-redux'; // deprecated in favor of react-connected-router
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';
import createHistory from 'history/createBrowserHistory';
// #endregion
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunkMiddleware from 'redux-thunk';
import createRootReducer from '../modules/reducers';
import fetchMiddleware from '../middleware/fetchMiddleware';
// #endregion

// #region constants
export const history = createHistory();
// #endregion

// #region createStore : enhancer

// #region logger middleware (dev only)
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
// #endregion

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    fetchMiddleware,
    loggerMiddleware, // logger at the end
  ),
);
// #endregion

// #region persisted reducer
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
  // whitelist: ['userAuth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history),
);
// #endregion

export default function configureStore(initialState?: any = {}): any {
  const store = createStore(persistedReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default),
    );
  }
  return store;
}
