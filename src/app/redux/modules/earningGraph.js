/* eslint no-console:0 */
/* eslint consistent-return:0 */

/*
  imports
 */
import moment               from 'moment';
import { appConfig }        from '../../config';
import {
  getEarningGraphData
}                           from '../../services/API';
import {
  fetchMockEarningGraphData
}                           from '../../services/fetchMocks';

/*
  constants
 */
const REQUEST_EARNING_GRAPH_DATA   = 'REQUEST_EARNING_GRAPH_DATA';
const RECEIVED_EARNING_GRAPH_DATA  = 'RECEIVED_EARNING_GRAPH_DATA';
const ERROR_EARNING_GRAPH_DATA     = 'ERROR_EARNING_GRAPH_DATA';

/*
  reducer
 */
const initialState = {
  isFetching: false,
  labels:     [],
  datasets:   [],
  time:       null
};

export default function earningGraph(state = initialState, action) {
  switch (action.type) {
  case 'REQUEST_EARNING_GRAPH_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };
  case 'RECEIVED_EARNING_GRAPH_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      labels:     action.labels,
      datasets:   action.datasets,
      time:       action.time
    };
  case 'ERROR_EARNING_GRAPH_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };
  default:
    return state;
  }
}


/*
  action creators
 */
export function fetchEarningGraphDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchEarningData(getState())) {
      return dispatch(fetchEarningGraphData());
    }
  };
}
function requestEarningGraphData(time = moment().format()) {
  return {
    type:       REQUEST_EARNING_GRAPH_DATA,
    isFetching: true,
    time
  };
}
function receivedEarningGraphData(data, time = moment().format()) {
  return {
    type:       RECEIVED_EARNING_GRAPH_DATA,
    isFetching: false,
    labels:     [...data.labels],
    datasets:   [...data.datasets],
    time
  };
}
function errorEarningGraphData(error, time = moment().format()) {
  return {
    type:       ERROR_EARNING_GRAPH_DATA,
    isFetching: false,
    error,
    time
  };
}
function fetchEarningGraphData() {
  return dispatch => {
    dispatch(requestEarningGraphData());
    if (appConfig.DEV_MODE) {
      // DEV ONLY
      fetchMockEarningGraphData()
        .then(
          data => dispatch(receivedEarningGraphData(data))
        );
    } else {
      getEarningGraphData()
        .then(
          data => dispatch(receivedEarningGraphData(data))
        )
        .catch(
          error => dispatch(errorEarningGraphData(error))
        );
    }
  };
}
function shouldFetchEarningData(state) {
  const earningGraphStore = state.earningGraph;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (earningGraphStore.isFetching) {
    return false;
  } else {
    return true;
  }
}
