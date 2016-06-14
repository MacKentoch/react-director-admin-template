'use strict';

import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import createLogger       from 'redux-logger';
import thunkMiddleware    from 'redux-thunk';
import * as reducers      from '../reducers';
import { routerReducer }  from 'react-router-redux';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

// combine reducers
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
