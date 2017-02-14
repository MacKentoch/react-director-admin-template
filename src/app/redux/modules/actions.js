// earningGraph:
import {fetchEarningGraphDataIfNeeded} from './earningGraph';
// sideMenu:
import {
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  getSideMenuCollpasedStateFromLocalStorage
}                                      from './sideMenu';
// teamMates:
import {fetchTeamMatesDataIfNeeded}    from './teamMates';
// userInfos:
import {fetchUserInfoDataIfNeeded}     from './userInfos';
// views:
import {
  enterHome,
  leaveHome,

  enterSimpleTables,
  leaveSimpleTables,

  enterBasicElements,
  leaveBasicElements,

  enterGeneral,
  leaveGeneral,

  enterPageNotFound,
  leavePageNotFound,

  enterStatsCard,
  leaveStatsCard,

  enterEarningGraph,
  leaveEarningGraph,

  enterNotifications,
  leaveNotifications,

  enterWorkProgress,
  leaveWorkProgress,

  enterTwitterFeed,
  leaveTwitterFeed,

  enterTeamMatesView,
  leaveTeamMatesView,

  enterTodoListView,
  leaveTodoListView,

  enterBreadcrumb,
  leaveBreadcrumb,

  enterStat,
  leaveStat,

  enterBasicProgressBar,
  leaveBasicProgressBar,

  enterTabPanel,
  leaveTabPanel,

  enterStripedProgressBar,
  leaveStripedProgressBar,

  enterAlert,
  leaveAlert,

  enterPagination,
  leavePagination
}                                     from './views';


export {
  // earningGraph:
  fetchEarningGraphDataIfNeeded,
  // sideMenu:
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  getSideMenuCollpasedStateFromLocalStorage,
  // teamMates:
  fetchTeamMatesDataIfNeeded,
  // userInfos:
  fetchUserInfoDataIfNeeded,
  // views:
  enterHome,
  leaveHome,
  enterSimpleTables,
  leaveSimpleTables,
  enterBasicElements,
  leaveBasicElements,
  enterGeneral,
  leaveGeneral,
  enterPageNotFound,
  leavePageNotFound,
  enterStatsCard,
  leaveStatsCard,
  enterEarningGraph,
  leaveEarningGraph,
  enterNotifications,
  leaveNotifications,
  enterWorkProgress,
  leaveWorkProgress,
  enterTwitterFeed,
  leaveTwitterFeed,
  enterTeamMatesView,
  leaveTeamMatesView,
  enterTodoListView,
  leaveTodoListView,
  enterBreadcrumb,
  leaveBreadcrumb,
  enterStat,
  leaveStat,
  enterBasicProgressBar,
  leaveBasicProgressBar,
  enterTabPanel,
  leaveTabPanel,
  enterStripedProgressBar,
  leaveStripedProgressBar,
  enterAlert,
  leaveAlert,
  enterPagination,
  leavePagination
};
