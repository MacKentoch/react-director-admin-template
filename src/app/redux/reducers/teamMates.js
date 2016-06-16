'use strict';


const initialState = {
  isFetching: false,
  data:   [],
  time:       null
};

const teamMates = (state = initialState, action) => {
  switch (action.type) {

  case 'REQUEST_TEAM_MATES_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case 'RECEIVED_TEAM_MATES_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      data:     [...action.data],
      time:       action.time
    };

  case 'ERROR_TEAM_MATES_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};


export default teamMates;
