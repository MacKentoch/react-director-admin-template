'use strict';
/* eslint no-console:0 */
/* eslint consistent-return:0 */
import moment         from 'moment';
import { appConfig }  from '../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  fetchMockEarningGraphData
}                     from '../../services';


export const REQUEST_EARNING_GRAPH_DATA   = 'REQUEST_EARNING_GRAPH_DATA';
export const RECEIVED_EARNING_GRAPH_DATA  = 'RECEIVED_EARNING_GRAPH_DATA';
export const ERROR_EARNING_GRAPH_DATA     = 'ERROR_EARNING_GRAPH_DATA';


const requestEarningGraphData = (time = moment().format()) => {
  return {
    type:       REQUEST_EARNING_GRAPH_DATA,
    isFetching: true,
    time
  };
};
const receivedEarningGraphData = (data, time = moment().format()) => {
  return {
    type:       RECEIVED_EARNING_GRAPH_DATA,
    isFetching: false,
    labels:     [...data.labels],
    datasets:   [...data.datasets],
    time
  };
};
const errorEarningGraphData = (time = moment().format()) => {
  return {
    type:       ERROR_EARNING_GRAPH_DATA,
    isFetching: false,
    time
  };
};
const fetchEarningGraphData = () => dispatch => {
  dispatch(requestEarningGraphData());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    fetchMockEarningGraphData()
      .then(
        json => dispatch(receivedEarningGraphData(json))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.earningGraph.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      data => dispatch(receivedEarningGraphData(data)))
    .catch(
      err => {
        dispatch(errorEarningGraphData());
        if (appConfig.DEBUG_ENABLED) {
          console.log('fetchEarningGraphData error: ', err);
        }
      }
    );
  }
};

export const fetchEarningGraphDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchEarningData(getState())) {
    return dispatch(fetchEarningGraphData());
  }
};
function shouldFetchEarningData(state) {
  const earningGraph = state.earningGraph;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (earningGraph.isFetching) {
    return false;
  } else {
    return true;
  }
}
