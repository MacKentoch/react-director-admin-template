// @flow

import React from 'react';
import { shallow } from 'enzyme';
import UserPanel from './UserPanel';
import { userInfosMockData } from '../../../../models/userInfosMock';

describe('UserPanel component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <UserPanel
        hello="Hi"
        username={`${userInfosMockData.firstname} ${
          userInfosMockData.lastname
        }`}
        showUserPicture={userInfosMockData.showPicture}
        userPicture={userInfosMockData.picture}
        connectionStatus={{ online: 'online', disconnected: 'disconnected' }}
        online
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
