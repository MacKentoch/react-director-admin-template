// @flow weak

import moment               from 'moment';
import { appConfig }        from '../../config';
import {
  fetchMockUserInfosData
}                           from '../../services';
import {
  getUserInfoData
}                           from '../../services/API';

const REQUEST_USER_INFOS_DATA   = 'REQUEST_USER_INFOS_DATA';
const RECEIVED_USER_INFOS_DATA  = 'RECEIVED_USER_INFOS_DATA';
const ERROR_USER_INFOS_DATA     = 'ERROR_USER_INFOS_DATA';

type UserInfoData = {
  login: ?string,
  firstname: string,
  lastname: string,
  picture: ?string,
  isAuthenticated: boolean
};

type UserInfoState = {
  isFetching: boolean,
  data: UserInfoData,
  isConnected: boolean,
  time: ?string
};

const initialState: UserInfoState = {
  isFetching: false,
  data: {
    login:            null,
    firstname:        '',
    lastname:         '',
    picture:          null,
    isAuthenticated:  false
  },
  isConnected: false,
  time: null
};

export default function userInfos(
  state: UserInfoState = initialState,
  action: any
) {
  switch (action.type) {

  case 'REQUEST_USER_INFOS_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case 'RECEIVED_USER_INFOS_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      data:       { ...action.userInfos.data },
      isConnected: true, // set user connected when retreiving userInfos
      time:       action.time
    };

  case 'ERROR_USER_INFOS_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
}


export function fetchUserInfoDataIfNeeded() {
  return (
    dispatch: (action: any) => any,
    getState: () => any
  ) => {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData());
    }
    return false;
  };
}
function requestUserInfosData(time: string = moment().format()) {
  return {
    type:       REQUEST_USER_INFOS_DATA,
    isFetching: true,
    time
  };
}
function receivedUserInfosData(data, time = moment().format()) {
  return {
    type:       RECEIVED_USER_INFOS_DATA,
    isFetching: false,
    userInfos: data,
    time
  };
}
function errorUserInfosData(time = moment().format()) {
  return {
    type:       ERROR_USER_INFOS_DATA,
    isFetching: false,
    time
  };
}

function fetchUserInfosData() {
  return async (dispatch) => {
    dispatch(requestUserInfosData());

    if (appConfig.DEV_MODE) {
      const data = await fetchMockUserInfosData();
      return dispatch(receivedUserInfosData(data));
    } else {
      try {
        const data = await getUserInfoData();
        return dispatch(receivedUserInfosData(data));
      } catch (error) {
        return dispatch(errorUserInfosData(error))
      }
    }
  };
}
function shouldFetchUserInfoData(state) {
  const userInfosStore = state.userInfos;
  if (userInfosStore.isFetching) {
    return false;
  } else {
    return true;
  }
}
