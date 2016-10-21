import moment         from 'moment';


const OPEN_SIDE_MENU   = 'OPEN_SIDE_MENU';
const CLOSE_SIDE_MENU  = 'CLOSE_SIDE_MENU';


const initialState = {
  isCollapsed: false,
  time: null
};

export default function sideMenu(state = initialState, action) {
  switch (action.type) {
  case 'OPEN_SIDE_MENU':
    return {
      ...state,
      isCollapsed:  action.isCollapsed,
      time:         action.time
    };
  case 'CLOSE_SIDE_MENU':
    return {
      ...state,
      isCollapsed:  action.isCollapsed,
      time:         action.time
    };
  default:
    return state;
  }
}


export function openSideMenu(time = moment().format()) {
  return {
    type:         OPEN_SIDE_MENU,
    isCollapsed:  false,
    time
  };
}
export function closeSideMenu(time = moment().format()) {
  return {
    type:         CLOSE_SIDE_MENU,
    isCollapsed:  true,
    time
  };
}

export function toggleSideMenu() {
  return (dispatch, getState) => {
    const state     = getState();
    const sideMenuStore  = state.sideMenu;
    if (sideMenuStore.isCollapsed) {
      dispatch(openSideMenu());
    } else {
      dispatch(closeSideMenu());
    }
  };
}
