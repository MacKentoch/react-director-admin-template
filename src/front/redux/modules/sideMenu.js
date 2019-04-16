// @flow

// #region imports
import { format } from 'date-fns';
import { type Dispatch, type GetState } from '../../types/redux-thunk';
import { type State } from '../../types/redux/modules/sideMenu';
// #endregion

// #region constants
const SIDEMU_IS_COLLAPSED_KEY = 'SIDEMENU_IS_OPENED_KEY';
const SIDEMU_IS_COLLAPSED_VALUE: boolean = true;
const SIDEMU_IS_NOT_COLLAPSED_VALUE: boolean = false;
const READ_LOCALSTORAGE = false;
const WRITE_LOCALSTORAGE = true;

const OPEN_SIDE_MENU = 'OPEN_SIDE_MENU';
const CLOSE_SIDE_MENU = 'CLOSE_SIDE_MENU';
const GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE =
  'GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE';
// #endregion

// #region flow types

type PermanentStore = {
  required: boolean,
  storeKey: string,
  storeValue: boolean,
  ReadOrWrite: boolean, // write key / value to localStorage
};
type Action = {
  type: | 'OPEN_SIDE_MENU'
    | 'CLOSE_SIDE_MENU'
    | 'GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE',
  error?: ?string,
  isCollapsed?: boolean,
  time?: string,
  permanentStore?: PermanentStore,
};

// #endregion

const initialState: State = {
  isCollapsed: false,
  time: '',
};

export default function sideMenu(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE: {
      const { permanentStore = { storeValue: false }, time } = action;

      return {
        isCollapsed: Boolean(permanentStore.storeValue),
        time,
      };
    }

    case OPEN_SIDE_MENU: {
      const { isCollapsed, time } = action;

      return {
        ...state,
        isCollapsed,
        time,
      };
    }

    case CLOSE_SIDE_MENU: {
      const { isCollapsed, time } = action;

      return {
        ...state,
        isCollapsed,
        time,
      };
    }

    default:
      return state;
  }
}

export function getSideMenuCollpasedStateFromLocalStorage(
  time?: string = format(new Date()),
): Action {
  return {
    type: GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: false, // set default to false
      ReadOrWrite: READ_LOCALSTORAGE, // write key / value to localStorage
    },
  };
}
export function openSideMenu(time?: string = format(new Date())): Action {
  return {
    type: OPEN_SIDE_MENU,
    isCollapsed: false,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_NOT_COLLAPSED_VALUE,
      ReadOrWrite: WRITE_LOCALSTORAGE, // write key / value to localStorage
    },
  };
}
export function closeSideMenu(time?: string = format(new Date())): Action {
  return {
    type: CLOSE_SIDE_MENU,
    isCollapsed: true,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_COLLAPSED_VALUE,
      ReadOrWrite: WRITE_LOCALSTORAGE, // write key / value to localStorage
    },
  };
}
export function toggleSideMenu() {
  return (
    dispatch: Dispatch<Action>,
    getState: GetState<{ sideMenu: State }>,
  ) => {
    const state = getState();
    const sideMenuStore = state.sideMenu;

    if (sideMenuStore.isCollapsed) {
      return dispatch(openSideMenu());
    }

    dispatch(closeSideMenu());
  };
}
