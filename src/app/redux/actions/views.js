'use strict';

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';

export const ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
export const LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';


export const enterHome = (time = new Date()) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
};

export const leaveHome = (time = new Date()) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
};


export const enterAbout = (time = new Date()) => {
  return {
    type:         ENTER_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    time,
    leaveTime:    null
  };
};

export const leaveAbout = (time = new Date()) => {
  return {
    type:         LEAVE_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    null,
    leaveTime:    time
  };
};
