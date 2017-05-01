import {
  createStore,
  compose,
  applyMiddleware
}                               from 'redux';
import createLogger             from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import { localStorageManager }  from '../middleware';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
// NOTE: if redux devtools extension is not installed, we just keep using Redux compose
const composeEnhancers =  typeof window === 'object' &&  // for universal ("isomorphic") apps
                          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                            // see: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
                          })
                          : compose;

// createStore : enhancer
const enhancer = composeEnhancers(
  applyMiddleware(localStorageManager, thunkMiddleware, loggerMiddleware)
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  module.hot.accept('../modules/reducers', () =>
    store.replaceReducer(require('../modules/reducers').default)
  );
  return store;
}
