// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  const mockToggleSideMenu = jest.fn();
  it('renders as expected', () => {
    const component = shallow(<Button toggleSideMenu={mockToggleSideMenu} />);
    expect(component).toMatchSnapshot();
  });
});
