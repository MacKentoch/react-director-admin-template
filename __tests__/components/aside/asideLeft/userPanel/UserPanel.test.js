'use strict';

import React          from 'react';
import UserPanel      from '../../../../../src/app/components/aside/asideLeft/userPanel/UserPanel';
import renderer       from 'react-test-renderer';
import { userInfosMockData } from '../../../../../src/app/models/userInfosMock';

describe('UserPanel component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <UserPanel
        hello="Hi"
        username={userInfosMockData.firstname + userInfosMockData.lastname}
        showUserPicture={userInfosMockData.showPicture}
        userPicture={userInfosMockData.picture}
        connectionStatus={{online: 'online', disconnected: 'disconnected'}}
        online
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
