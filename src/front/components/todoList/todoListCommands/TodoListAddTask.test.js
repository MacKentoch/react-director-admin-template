// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TodoListAddTask from './TodoListAddTask';

describe('TodoListAddTask component', () => {
  it('renders as expected', () => {
    const component = shallow(<TodoListAddTask />);
    expect(component).toMatchSnapshot();
  });
});
