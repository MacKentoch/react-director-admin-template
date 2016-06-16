'use strict';

import {
  enterHome,
  leaveHome,
  enterSimpleTables,
  leaveSimpleTables,
  enterBasicElements,
  leaveBasicElements,
  enterGeneral,
  leaveGeneral
}                                 from './views';
import {
  fetchEarningGraphDataIfNeeded
}                                 from './earningGraph';
import {
  fetchTeamMatesDataIfNeeded
}                                 from './teamMates';
import {
  fetchUserInfoDataIfNeeded
}                                 from './userInfos';
import {
  openSideMenu,
  closeSideMenu,
  toggleSideMenu
}                                 from './sideMenu';

export {
  enterHome,
  leaveHome,
  enterSimpleTables,
  leaveSimpleTables,
  enterBasicElements,
  leaveBasicElements,
  fetchEarningGraphDataIfNeeded,
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  enterGeneral,
  leaveGeneral,
  fetchUserInfoDataIfNeeded,
  fetchTeamMatesDataIfNeeded
};
