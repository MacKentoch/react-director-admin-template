// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders as expected', () => {
    const component = shallow(<Notifications />);
    expect(component).toMatchSnapshot();
  });
});
