'use strict';

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
  DevTools.instrument(),
  applyMiddleware(loggerMiddleware, thunkMiddleware),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+\b)/
    )
  )
);

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
