import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import * as reducers            from '../modules/reducers';
import { routerReducer }        from 'react-router-redux';
import { localStorageManager }  from '../middleware';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(localStorageManager, thunkMiddleware)
);

// combine reducers
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
