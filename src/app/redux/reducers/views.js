'use strict';

const initialState = {
  currentView:  'home',
  enterTime:    null,
  leaveTime:    null
};

const views = (state = initialState, action) => {
  switch (action.type) {

  case 'ENTER_HOME_VIEW':
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;

  case 'LEAVE_HOME_VIEW':
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;


  case 'ENTER_ABOUT_VIEW':
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;

  case 'LEAVE_ABOUT_VIEW':
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return Object.assign({}, state, {
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      });
    }
    return state;


  default:
    return state;
  }
};


export default views;
