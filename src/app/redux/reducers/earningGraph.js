'use strict';

const initialState = {
  isFetching: false,
  labels:     [],
  datasets:   [],
  time:       null
};

const earningGraph = (state = initialState, action) => {
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
};


export default earningGraph;
