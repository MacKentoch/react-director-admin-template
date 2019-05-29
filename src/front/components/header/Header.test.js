// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  const props = {
    appName: 'app name',
    userLogin: 'login',
    userPicture: 'some_picture_link',
    showPicture: true,
    userFirstname: 'firstname',
    userLastname: 'lastname',
    onLogout: jest.fn(),
    toggleSideMenu: jest.fn(),
  };

  it('renders as expected', () => {
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });
});
