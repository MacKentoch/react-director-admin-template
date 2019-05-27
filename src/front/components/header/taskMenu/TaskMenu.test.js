// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TaskMenu from './TaskMenu';

describe('TaskMenu component', () => {
  it('renders as expected', () => {
    const component = shallow(<TaskMenu />);
    expect(component).toMatchSnapshot();
  });
});
