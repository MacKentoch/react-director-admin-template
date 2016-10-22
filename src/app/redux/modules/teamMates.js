/* eslint no-console:0 */
/* eslint consistent-return:0 */
import moment               from 'moment';
import { appConfig }        from '../../config';
import {
  fetchMockTeamMatesData
}                           from '../../services';
import {
  getTeamMatesData
}                           from '../../services/API';


const REQUEST_TEAM_MATES_DATA   = 'REQUEST_TEAM_MATES_DATA';
const RECEIVED_TEAM_MATES_DATA  = 'RECEIVED_TEAM_MATES_DATA';
const ERROR_TEAM_MATES_DATA     = 'ERROR_TEAM_MATES_DATA';


const initialState = {
  isFetching: false,
  data:   [],
  time:       null
};

export default function teamMates(state = initialState, action) {
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
}


export function fetchTeamMatesDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTeamMatesData(getState())) {
      return dispatch(fetchTeamMatesData());
    }
  };
}
function requestTeamMatesData(time = moment().format()) {
  return {
    type:       REQUEST_TEAM_MATES_DATA,
    isFetching: true,
    time
  };
}
function receivedTeamMatesData(data, time = moment().format()) {
  return {
    type:       RECEIVED_TEAM_MATES_DATA,
    isFetching: false,
    data,
    time
  };
}
function errorTeamMatesData(time = moment().format()) {
  return {
    type:       ERROR_TEAM_MATES_DATA,
    isFetching: false,
    time
  };
}
function fetchTeamMatesData() {
  return dispatch => {
    dispatch(requestTeamMatesData());
    if (appConfig.DEV_MODE) {
      fetchMockTeamMatesData()
        .then(
          data => dispatch(receivedTeamMatesData(data))
        );
    } else {
      getTeamMatesData()
      .then(
        data => dispatch(receivedTeamMatesData(data)))
      .catch(
        error => dispatch(errorTeamMatesData(error))
      );
    }
  };
}
function shouldFetchTeamMatesData(state) {
  const teamMatesStore = state.teamMates;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (teamMatesStore.isFetching) {
    return false;
  } else {
    return true;
  }
}
