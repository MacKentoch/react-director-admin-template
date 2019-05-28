// @flow

import React from 'react';
import { shallow } from 'enzyme';
import UserMenu from './UserMenu';

describe('UserMenu component', () => {
  const props = {
    login: 'login',
    picture: 'some_picture_link',
    firstname: 'firstname',
    lastname: 'lastname',
    onLogout: jest.fn(),
  };

  it('renders as expected', () => {
    const component = shallow(<UserMenu {...props} />);
    expect(component).toMatchSnapshot();
  });
});
