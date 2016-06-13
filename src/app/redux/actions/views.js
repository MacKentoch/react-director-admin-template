'use strict';

import moment from 'moment';

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';

export const ENTER_SIMPLE_TABLES_VIEW = 'ENTER_SIMPLE_TABLES_VIEW';
export const LEAVE_SIMPLE_TABLES_VIEW = 'LEAVE_SIMPLE_TABLES_VIEW';

export const ENTER_BASIC_ELEMENTS_VIEW = 'ENTER_BASIC_ELEMENTS_VIEW';
export const LEAVE_BASIC_ELEMENTS_VIEW = 'LEAVE_BASIC_ELEMENTS_VIEW';

export const ENTER_GENERAL_VIEW  = 'ENTER_GENERAL_VIEW';
export const LEAVE_GENERAL_VIEW  = 'LEAVE_GENERAL_VIEW';


export const enterHome = (time = moment().format()) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'Home',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveHome = (time = moment().format()) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'Home',
    enterTime:    null,
    leaveTime:    time
  };
};


export const enterSimpleTables = (time = moment().format()) => {
  return {
    type:         ENTER_SIMPLE_TABLES_VIEW,
    currentView:  'SimpleTables',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveSimpleTables = (time = moment().format()) => {
  return {
    type:         LEAVE_SIMPLE_TABLES_VIEW,
    currentView:  'SimpleTables',
    enterTime:    null,
    leaveTime:    time
  };
};

export const enterBasicElements = (time = moment().format()) => {
  return {
    type:         ENTER_BASIC_ELEMENTS_VIEW,
    currentView:  'BasicElements',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveBasicElements = (time = moment().format()) => {
  return {
    type:         LEAVE_BASIC_ELEMENTS_VIEW,
    currentView:  'BasicElements',
    enterTime:    null,
    leaveTime:    time
  };
};

export const enterGeneral = (time = moment().format()) => {
  return {
    type:         ENTER_GENERAL_VIEW,
    currentView:  'General',
    enterTime:    time,
    leaveTime:    null
  };
};
export const leaveGeneral = (time = moment().format()) => {
  return {
    type:         LEAVE_GENERAL_VIEW,
    currentView:  'General',
    enterTime:    null,
    leaveTime:    time
  };
};
