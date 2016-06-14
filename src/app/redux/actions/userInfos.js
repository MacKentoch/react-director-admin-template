'use strict';

import moment         from 'moment';
import { appConfig }  from '../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin,
  fetchMockUserInfosData
}                     from '../../services';

export const REQUEST_USER_INFOS_DATA   = 'REQUEST_USER_INFOS_DATA';
export const RECEIVED_USER_INFOS_DATA  = 'RECEIVED_USER_INFOS_DATA';
export const ERROR_USER_INFOS_DATA     = 'ERROR_USER_INFOS_DATA';


const requestUserInfosData = (time = moment().format()) => {
  return {
    type:       REQUEST_USER_INFOS_DATA,
    isFetching: true,
    time
  };
};
const receivedUserInfosData = (userInfos, time = moment().format()) => {
  return {
    type:       RECEIVED_USER_INFOS_DATA,
    isFetching: false,
    userInfos,
    time
  };
};
const errorUserInfosData = (time = moment().format()) => {
  return {
    type:       ERROR_USER_INFOS_DATA,
    isFetching: false,
    time
  };
};
const fetchUserInfosData = () => dispatch => {
  dispatch(requestUserInfosData());
  if (appConfig.DEV_MODE) {
    // DEV ONLY
    fetchMockUserInfosData()
      .then(
        data => dispatch(receivedUserInfosData(data))
      );
  } else {
    const url = `${getLocationOrigin()}/${appConfig.userInfos.data.API}`;
    const options = {...defaultOptions};

    fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(
      data => dispatch(receivedUserInfosData(data)))
    .catch(
      err => {
        dispatch(errorUserInfosData());
        if (appConfig.DEBUG_ENABLED) {
          console.log('fetchUserInfosData error: ', err);
        }
      }
    );
  }
};
export const fetchUserInfoDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchUserInfoData(getState())) {
    return dispatch(fetchUserInfosData());
  }
};
function shouldFetchUserInfoData(state) {
  const userInfos = state.userInfos;
  // just check wether fetching (assuming data could be refreshed and should not persist in store)
  if (userInfos.isFetching) {
    return false;
  } else {
    return true;
  }
}
