'use strict';

import moment         from 'moment';

export const OPEN_SIDE_MENU   = 'OPEN_SIDE_MENU';
export const CLOSE_SIDE_MENU  = 'CLOSE_SIDE_MENU';


export const openSideMenu = (time = moment().format()) => {
  return {
    type:         OPEN_SIDE_MENU,
    isCollapsed:  false,
    time
  };
};

export const closeSideMenu = (time = moment().format()) => {
  return {
    type:         CLOSE_SIDE_MENU,
    isCollapsed:  true,
    time
  };
};

export const toggleSideMenu = () => (dispatch, getState) => {
  const state     = getState();
  const sideMenu  = state.sideMenu;
  if (sideMenu.isCollapsed) {
    dispatch(openSideMenu());
  } else {
    dispatch(closeSideMenu());
  }
};
