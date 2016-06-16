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
  fetchMockTeamMatesData
}                     from '../../services';


export const REQUEST_TEAM_MATES_DATA   = 'REQUEST_TEAM_MATES_DATA';
export const RECEIVED_TEAM_MATES_DATA  = 'RECEIVED_TEAM_MATES_DATA';
export const ERROR_TEAM_MATES_DATA     = 'ERROR_TEAM_MATES_DATA';


const requestTeamMatesData = (time = moment().format()) => {
  return {
    type:       REQUEST_TEAM_MATES_DATA,
    isFetching: true,
    time
  };
};
const receivedTeamMatesData = (data, time = moment().format()) => {
  return {
    type:       RECEIVED_TEAM_MATES_DATA,
    isFetching: false,
    data,
    time
  };
};
const errorTeamMatesData = (time = moment().format()) => {
  return {
    type:       ERROR_TEAM_MATES_DATA,
    isFetching: false,
    time
  };
};
const fetchTeamMatesData = () => dispatch => {
  dispatch(requestTeamMatesData());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    fetchMockTeamMatesData()
      .then(
        data => dispatch(receivedTeamMatesData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.teamMates.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      data => dispatch(receivedTeamMatesData(data)))
    .catch(
      err => {
        dispatch(errorTeamMatesData());
        if (appConfig.DEBUG_ENABLED) {
          console.log('fetchTeamMatesData error: ', err);
        }
      }
    );
  }
};

export const fetchTeamMatesDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchTeamMatesData(getState())) {
    return dispatch(fetchTeamMatesData());
  }
};
function shouldFetchTeamMatesData(state) {
  const teamMates = state.teamMates;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (teamMates.isFetching) {
    return false;
  } else {
    return true;
  }
}
