import moment         from 'moment';

const SIDEMU_IS_COLLAPSED_KEY = 'SIDEMENU_IS_OPENED_KEY';
const SIDEMU_IS_COLLAPSED_VALUE = true;
const SIDEMU_IS_NOT_COLLAPSED_VALUE = false;
const READ_LOCALSTORAGE = false;
const WRITE_LOCALSTORAGE = true;


const OPEN_SIDE_MENU   = 'OPEN_SIDE_MENU';
const CLOSE_SIDE_MENU  = 'CLOSE_SIDE_MENU';
const GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE = 'GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE';

const initialState = {
  isCollapsed: false,
  time: null
};

export default function sideMenu(state = initialState, action) {
  switch (action.type) {

  case GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE:
    return {
      isCollapsed:  Boolean(action.permanentStore.storeValue),
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
    type: GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: '',
      ReadOrWrite: READ_LOCALSTORAGE // write key / value to localStorage
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
      ReadOrWrite: WRITE_LOCALSTORAGE // write key / value to localStorage
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
      ReadOrWrite: WRITE_LOCALSTORAGE // write key / value to localStorage
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
