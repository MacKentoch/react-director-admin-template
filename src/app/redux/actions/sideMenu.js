'use strict';

import moment         from 'moment';

export const OPEN_SIDE_MENU   = 'OPEN_SIDE_MENU';
export const CLOSE_SIDE_MENU  = 'CLOSE_SIDE_MENU';

export const openSideMenu = (time = moment().format()) => {
  return {
    type:     OPEN_SIDE_MENU,
    isOpened: true,
    time
  };
};

export const closeSideMenu = (time = moment().format()) => {
  return {
    type:     CLOSE_SIDE_MENU,
    isOpened: false,
    time
  };
};

export const toggleSideMenu = () => (dispatch, getState) => {
  const sideMenu = getState().sideMenu;
  if (sideMenu.isOpened) {
    dispatch(closeSideMenu());
  }
  dispatch(openSideMenu());
};
