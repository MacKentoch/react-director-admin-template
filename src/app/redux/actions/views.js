'use strict';

import moment from 'moment';

export const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';

export const ENTER_SIMPLE_TABLES_VIEW = 'ENTER_SIMPLE_TABLES_VIEW';
export const LEAVE_SIMPLE_TABLES_VIEW = 'LEAVE_SIMPLE_TABLES_VIEW';


export const enterHome = (time = moment().format()) => {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
};

export const leaveHome = (time = moment().format()) => {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
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
