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
const ENTER_WORK_PROGRESS_VIEW = 'ENTER_WORK_PROGRESS_VIEW';
const LEAVE_WORK_PROGRESS_VIEW = 'LEAVE_WORK_PROGRESS_VIEW';
const ENTER_TWITTER_FEED_VIEW = 'ENTER_TWITTER_FEED_VIEW';
const LEAVE_TWITTER_FEED_VIEW = 'LEAVE_TWITTER_FEED_VIEW';
const ENTER_TEAM_MATES_VIEW = 'ENTER_TEAM_MATES_VIEW';
const LEAVE_TEAM_MATES_VIEW = 'LEAVE_TEAM_MATES_VIEW';
const ENTER_TODO_LIST_VIEW = 'ENTER_TODO_LIST_VIEW';
const LEAVE_TODO_LIST_VIEW = 'LEAVE_TODO_LIST_VIEW';
const ENTER_BREADCRUMB_VIEW = 'ENTER_BREADCRUMB_VIEW';
const LEAVE_BREADCRUMB_VIEW = 'LEAVE_BREADCRUMB_VIEW';
const ENTER_STAT_VIEW = 'ENTER_STAT_VIEW';
const LEAVE_STAT_VIEW = 'LEAVE_STAT_VIEW';
const ENTER_BASIC_PROGRESS_BAR_VIEW = 'ENTER_BASIC_PROGRESS_BAR_VIEW';
const LEAVE_BASIC_PROGRESS_BAR_VIEW = 'LEAVE_BASIC_PROGRESS_BAR_VIEW';
const ENTER_TAB_PANEL_VIEW = 'ENTER_TAB_PANEL_VIEW';
const LEAVE_TAB_PANEL_VIEW = 'LEAVE_TAB_PANEL_VIEW';
const ENTER_STRIPED_PROGRESS_BAR_VIEW = 'ENTER_STRIPED_PROGRESS_BAR_VIEW';
const LEAVE_STRIPED_PROGRESS_BAR_VIEW = 'LEAVE_STRIPED_PROGRESS_BAR_VIEW';
const ENTER_ALERT_VIEW = 'ENTER_ALERT_VIEW';
const LEAVE_ALERT_VIEW = 'LEAVE_ALERT_VIEW';
const ENTER_PAGINATION_VIEW = 'ENTER_PAGINATION_VIEW';
const LEAVE_PAGINATION_VIEW = 'LEAVE_PAGINATION_VIEW';

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
  case ENTER_WORK_PROGRESS_VIEW:
  case ENTER_TWITTER_FEED_VIEW:
  case ENTER_TEAM_MATES_VIEW:
  case ENTER_TODO_LIST_VIEW:
  case ENTER_BREADCRUMB_VIEW:
  case ENTER_STAT_VIEW:
  case ENTER_BASIC_PROGRESS_BAR_VIEW:
  case ENTER_TAB_PANEL_VIEW:
  case ENTER_STRIPED_PROGRESS_BAR_VIEW:
  case ENTER_ALERT_VIEW:
  case ENTER_PAGINATION_VIEW:
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
  case LEAVE_WORK_PROGRESS_VIEW:
  case LEAVE_TWITTER_FEED_VIEW:
  case LEAVE_TEAM_MATES_VIEW:
  case LEAVE_TODO_LIST_VIEW:
  case LEAVE_BREADCRUMB_VIEW:
  case LEAVE_STAT_VIEW:
  case LEAVE_BASIC_PROGRESS_BAR_VIEW:
  case LEAVE_TAB_PANEL_VIEW:
  case LEAVE_STRIPED_PROGRESS_BAR_VIEW:
  case LEAVE_ALERT_VIEW:
  case LEAVE_PAGINATION_VIEW:
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

export function enterWorkProgress(time = moment().format()) {
  return {
    type:         ENTER_WORK_PROGRESS_VIEW,
    currentView:  'WorkProgress',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveWorkProgress(time = moment().format()) {
  return {
    type:         LEAVE_WORK_PROGRESS_VIEW,
    currentView:  'WorkProgress',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterTwitterFeed(time = moment().format()) {
  return {
    type:         ENTER_TWITTER_FEED_VIEW,
    currentView:  'TwitterFeed',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveTwitterFeed(time = moment().format()) {
  return {
    type:         LEAVE_TWITTER_FEED_VIEW,
    currentView:  'TwitterFeed',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterTeamMatesView(time = moment().format()) {
  return {
    type:         ENTER_TEAM_MATES_VIEW,
    currentView:  'TeamMatesView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveTeamMatesView(time = moment().format()) {
  return {
    type:         LEAVE_TEAM_MATES_VIEW,
    currentView:  'TeamMatesView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterTodoListView(time = moment().format()) {
  return {
    type:         ENTER_TODO_LIST_VIEW,
    currentView:  'TodoListView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveTodoListView(time = moment().format()) {
  return {
    type:         LEAVE_TODO_LIST_VIEW,
    currentView:  'TodoListView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterBreadcrumb(time = moment().format()) {
  return {
    type:         ENTER_BREADCRUMB_VIEW,
    currentView:  'BreadcrumbView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveBreadcrumb(time = moment().format()) {
  return {
    type:         LEAVE_BREADCRUMB_VIEW,
    currentView:  'BreadcrumbView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterStat(time = moment().format()) {
  return {
    type:         ENTER_STAT_VIEW,
    currentView:  'StatView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveStat(time = moment().format()) {
  return {
    type:         LEAVE_STAT_VIEW,
    currentView:  'StatView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterBasicProgressBar(time = moment().format()) {
  return {
    type:         ENTER_BASIC_PROGRESS_BAR_VIEW,
    currentView:  'BasicProgressBarView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveBasicProgressBar(time = moment().format()) {
  return {
    type:         LEAVE_BASIC_PROGRESS_BAR_VIEW,
    currentView:  'BasicProgressBarView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterTabPanel(time = moment().format()) {
  return {
    type:         ENTER_TAB_PANEL_VIEW,
    currentView:  'TabPanel',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveTabPanel(time = moment().format()) {
  return {
    type:         LEAVE_TAB_PANEL_VIEW,
    currentView:  'TabPanel',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterStripedProgressBar(time = moment().format()) {
  return {
    type:         ENTER_STRIPED_PROGRESS_BAR_VIEW,
    currentView:  'StripedProgressBarView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveStripedProgressBar(time = moment().format()) {
  return {
    type:         LEAVE_STRIPED_PROGRESS_BAR_VIEW,
    currentView:  'StripedProgressBarView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterAlert(time = moment().format()) {
  return {
    type:         ENTER_ALERT_VIEW,
    currentView:  'AlertView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveAlert(time = moment().format()) {
  return {
    type:         LEAVE_ALERT_VIEW,
    currentView:  'AlertView',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterPagination(time = moment().format()) {
  return {
    type:         ENTER_PAGINATION_VIEW,
    currentView:  'PaginationView',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leavePagination(time = moment().format()) {
  return {
    type:         LEAVE_PAGINATION_VIEW,
    currentView:  'PaginationView',
    enterTime:    null,
    leaveTime:    time
  };
}
