'use strict';

const initialState = {
  isOpened:   false,
  time:       null
};

const sideMenu = (state = initialState, action) => {
  switch (action.type) {

  case 'OPEN_SIDE_MENU':
    return {
      ...state,
      isOpened: action.isOpened,
      time:     action.time
    };

  case 'CLOSE_SIDE_MENU':
    return {
      ...state,
      isOpened: action.isOpened,
      time:     action.time
    };

  default:
    return state;
  }
};


export default sideMenu;
