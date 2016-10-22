import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import thunkMiddleware    from 'redux-thunk';
import * as reducers      from '../modules/reducers';
import { routerReducer }  from 'react-router-redux';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

// combine reducers
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
