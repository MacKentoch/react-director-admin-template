// @flow

import sideMenuStore        from '../../../src/app/redux/modules/sideMenu';
import * as sidemenuActions from '../../../src/app/redux/modules/sideMenu';
import moment               from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm';

describe('redux - reducer "sideMenu', () => {
  it('should return an initial state', () => {
    const initialState = {
      isCollapsed: false,
      time: null
    };
    /* eslint-disable no-undefined */
    expect(sideMenuStore(undefined, {})).toEqual(initialState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to OPEN_SIDE_MENU action', () => {
    const now = moment().format(dateFormat);

    const action = {
      type: 'OPEN_SIDE_MENU',
      isCollapsed:  false,
      time: now,
      // for localStorageManager middleware
      permanentStore: {
        required: true,
        storeKey: 'SIDEMENU_IS_OPENED_KEY',
        storeValue: false,
        ReadOrWrite: true // write key / value to localStorage
      }
    };

    const expectedState = {
      isCollapsed: false,
      time: now
    };
    /* eslint-disable no-undefined */
    expect(sideMenuStore(undefined, action)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to CLOSE_SIDE_MENU action', () => {
    const now = moment().format(dateFormat);

    const action = {
      type: 'CLOSE_SIDE_MENU',
      isCollapsed:  true,
      time: now,
      // for localStorageManager middleware
      permanentStore: {
        required: true,
        storeKey: 'SIDEMENU_IS_OPENED_KEY',
        storeValue: true,
        ReadOrWrite: true // write key / value to localStorage
      }
    };

    const expectedState = {
      isCollapsed: true,
      time: now
    };
    /* eslint-disable no-undefined */
    expect(sideMenuStore(undefined, action)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });
});


describe('redux - action creators "sideMenu', () => {
  it('should dispatch open sidemenu action: ', () => {
    const now = moment().format();
    const expectedAction = {
      type:         'OPEN_SIDE_MENU',
      isCollapsed:  false,
      time: now,
      // for localStorageManager middleware
      permanentStore: {
        required: true,
        storeKey: 'SIDEMENU_IS_OPENED_KEY',
        storeValue: false,
        ReadOrWrite: true // write key / value to localStorage
      }
    };

    expect(sidemenuActions.openSideMenu()).toEqual(expectedAction);
  });

  it('should dispatch close sidemenu action: ', () => {
    const now = moment().format();
    const expectedAction = {
      type:         'CLOSE_SIDE_MENU',
      isCollapsed:  true,
      time:         now,
      // for localStorageManager middleware
      permanentStore: {
        required: true,
        storeKey: 'SIDEMENU_IS_OPENED_KEY',
        storeValue: true,
        ReadOrWrite: true // write key / value to localStorage
      }
    };

    expect(sidemenuActions.closeSideMenu()).toEqual(expectedAction);
  });
});
