// flow weak 

import {
  createStore,
  applyMiddleware
}                               from 'redux';
import { createLogger }         from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import { localStorageManager }  from '../middleware';
import { composeWithDevTools }  from 'redux-devtools-extension';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    localStorageManager,
    thunkMiddleware,
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
