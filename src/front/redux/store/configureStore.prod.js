// @flow

// #region imports
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { routerMiddleware } from 'react-router-redux'; // deprecated in favor of react-connected-router
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';
import createHistory from 'history/createBrowserHistory';
// #endregion
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createRootReducer from '../modules/reducers';
import fetchMiddleware from '../middleware/fetchMiddleware';
// #endregion

// #region constants
export const history = createHistory();
// #endregion

// #region createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, fetchMiddleware, routerMiddleware(history)),
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
  return createStore(persistedReducer, initialState, enhancer);
}
