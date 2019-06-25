// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TabPanelDemo from './TabPanelDemo';

describe('TabPanelDemo component', () => {
  it('renders as expected', () => {
    const component = shallow(<TabPanelDemo />);
    expect(component).toMatchSnapshot();
  });
});
