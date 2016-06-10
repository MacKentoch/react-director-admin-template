'use strict';
/* eslint no-use-before-define:0 */
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { persistState }         from 'redux-devtools';
import { routerReducer }        from 'react-router-redux';
import createLogger             from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import * as reducers            from '../reducers';
import DevTools                 from '../devTools/DevTools.jsx';


const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(loggerMiddleware, thunkMiddleware),
  persistState(getDebugSessionKey()),
  DevTools.instrument()
);

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

// combine reducers -> createStore reducer
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  module.hot.accept('../reducers', () =>
    store.replaceReducer(require('../reducers').default)
  );
  return store;
}
