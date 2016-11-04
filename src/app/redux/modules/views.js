import moment from 'moment';

const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';
const ENTER_SIMPLE_TABLES_VIEW = 'ENTER_SIMPLE_TABLES_VIEW';
const LEAVE_SIMPLE_TABLES_VIEW = 'LEAVE_SIMPLE_TABLES_VIEW';
const ENTER_BASIC_ELEMENTS_VIEW = 'ENTER_BASIC_ELEMENTS_VIEW';
const LEAVE_BASIC_ELEMENTS_VIEW = 'LEAVE_BASIC_ELEMENTS_VIEW';
const ENTER_GENERAL_VIEW  = 'ENTER_GENERAL_VIEW';
const LEAVE_GENERAL_VIEW  = 'LEAVE_GENERAL_VIEW';
const ENTER_PAGE_NOT_FOUND_VIEW  = 'ENTER_PAGE_NOT_FOUND_VIEW';
const LEAVE_PAGE_NOT_FOUND_VIEW  = 'LEAVE_PAGE_NOT_FOUND_VIEW';
const ENTER_STATS_CARD_VIEW = 'ENTER_STATS_CARD_VIEW';
const LEAVE_STATS_CARD_VIEW = 'LEAVE_STATS_CARD_VIEW';
const ENTER_EARNING_GRAPH_VIEW = 'ENTER_EARNING_GRAPH_VIEW';
const LEAVE_EARNING_GRAPH_VIEW = 'LEAVE_EARNING_GRAPH_VIEW';
const ENTER_NOTIFICATIONS_VIEW = 'ENTER_NOTIFICATIONS_VIEW';
const LEAVE_NOTIFICATIONS_VIEW = 'LEAVE_NOTIFICATIONS_VIEW';

const initialState = {
  currentView:  'home',
  enterTime:    null,
  leaveTime:    null
};

export default function views(state = initialState, action) {
  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_SIMPLE_TABLES_VIEW:
  case ENTER_BASIC_ELEMENTS_VIEW:
  case ENTER_GENERAL_VIEW:
  case ENTER_PAGE_NOT_FOUND_VIEW:
  case ENTER_STATS_CARD_VIEW:
  case ENTER_EARNING_GRAPH_VIEW:
  case ENTER_NOTIFICATIONS_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_SIMPLE_TABLES_VIEW:
  case LEAVE_BASIC_ELEMENTS_VIEW:
  case LEAVE_GENERAL_VIEW:
  case LEAVE_PAGE_NOT_FOUND_VIEW:
  case LEAVE_STATS_CARD_VIEW:
  case LEAVE_EARNING_GRAPH_VIEW:
  case LEAVE_NOTIFICATIONS_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}


export function enterHome(time = moment().format()) {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'Home',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveHome(time = moment().format()) {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'Home',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterSimpleTables(time = moment().format()) {
  return {
    type:         ENTER_SIMPLE_TABLES_VIEW,
    currentView:  'SimpleTables',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveSimpleTables(time = moment().format()) {
  return {
    type:         LEAVE_SIMPLE_TABLES_VIEW,
    currentView:  'SimpleTables',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterBasicElements(time = moment().format()) {
  return {
    type:         ENTER_BASIC_ELEMENTS_VIEW,
    currentView:  'BasicElements',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveBasicElements(time = moment().format()) {
  return {
    type:         LEAVE_BASIC_ELEMENTS_VIEW,
    currentView:  'BasicElements',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterGeneral(time = moment().format()) {
  return {
    type:         ENTER_GENERAL_VIEW,
    currentView:  'General',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveGeneral(time = moment().format()) {
  return {
    type:         LEAVE_GENERAL_VIEW,
    currentView:  'General',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterPageNotFound(time = moment().format()) {
  return {
    type:         ENTER_PAGE_NOT_FOUND_VIEW,
    currentView:  'PageNotFound',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leavePageNotFound(time = moment().format()) {
  return {
    type:         LEAVE_PAGE_NOT_FOUND_VIEW,
    currentView:  'PageNotFound',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterStatsCard(time = moment().format()) {
  return {
    type:         ENTER_STATS_CARD_VIEW,
    currentView:  'StatsCard',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveStatsCard(time = moment().format()) {
  return {
    type:         LEAVE_STATS_CARD_VIEW,
    currentView:  'StatsCard',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterEarningGraph(time = moment().format()) {
  return {
    type:         ENTER_EARNING_GRAPH_VIEW,
    currentView:  'EarningGraph',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveEarningGraph(time = moment().format()) {
  return {
    type:         LEAVE_EARNING_GRAPH_VIEW,
    currentView:  'EarningGraph',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterNotifications(time = moment().format()) {
  return {
    type:         ENTER_NOTIFICATIONS_VIEW,
    currentView:  'Notifications',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveNotifications(time = moment().format()) {
  return {
    type:         LEAVE_NOTIFICATIONS_VIEW,
    currentView:  'Notifications',
    enterTime:    null,
    leaveTime:    time
  };
}
