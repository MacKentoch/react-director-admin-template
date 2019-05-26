// @flow

import React from 'react';
import { shallow } from 'enzyme';
import MessageMenu from './MessageMenu';

describe('MessageMenu component', () => {
  it('renders as expected', () => {
    const component = shallow(<MessageMenu />);
    expect(component).toMatchSnapshot();
  });
});
