import moment         from 'moment';

const SIDEMU_IS_COLLAPSED_KEY = 'SIDEMU_IS_OPENED_KEY';
const SIDEMU_IS_COLLAPSED_VALUE = true;
const SIDEMU_IS_NOT_COLLAPSED_VALUE = false;

const GET_STORED_SIDE_MENU_OPEN_STATE = 'GET_STORED_SIDE_MENU_OPEN_STATE';
const OPEN_SIDE_MENU   = 'OPEN_SIDE_MENU';
const CLOSE_SIDE_MENU  = 'CLOSE_SIDE_MENU';
const GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE = 'GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE';

const initialState = {
  isCollapsed: false,
  time: null
};

export default function sideMenu(state = initialState, action) {
  switch (action.type) {

  case GET_STORED_SIDE_MENU_OPEN_STATE:
    return {
      isCollapsed:  action.permanentStore.storeValue,
      time:         action.time
    };
  case OPEN_SIDE_MENU:
    return {
      ...state,
      isCollapsed:  action.isCollapsed,
      time:         action.time
    };
  case CLOSE_SIDE_MENU:
    return {
      ...state,
      isCollapsed:  action.isCollapsed,
      time:         action.time
    };
  default:
    return state;
  }
}

export function getSideMenuCollpasedStateFromLocalStorage(time = moment().format()) {
  return {
    type:         GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE,
    isCollapsed:  false,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_NOT_COLLAPSED_VALUE,
      ReadOrWrite: true // write key / value to localStorage
    }
  };
}
export function openSideMenu(time = moment().format()) {
  return {
    type:         OPEN_SIDE_MENU,
    isCollapsed:  false,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_NOT_COLLAPSED_VALUE,
      ReadOrWrite: true // write key / value to localStorage
    }
  };
}
export function closeSideMenu(time = moment().format()) {
  return {
    type:         CLOSE_SIDE_MENU,
    isCollapsed:  true,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_COLLAPSED_VALUE,
      ReadOrWrite: true // write key / value to localStorage
    }
  };
}
export function toggleSideMenu() {
  return (dispatch, getState) => {
    const state = getState();
    const sideMenuStore = state.sideMenu;
    if (sideMenuStore.isCollapsed) {
      dispatch(openSideMenu());
    } else {
      dispatch(closeSideMenu());
    }
  };
}
