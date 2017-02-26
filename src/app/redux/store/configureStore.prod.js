import {
  createStore,
  applyMiddleware,
  compose
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import { localStorageManager }  from '../middleware';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(localStorageManager, thunkMiddleware)
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
