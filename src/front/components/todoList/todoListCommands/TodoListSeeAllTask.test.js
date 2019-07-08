// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TodoListSeeAllTask from './TodoListSeeAllTask';

describe('TodoListSeeAllTask component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <TodoListSeeAllTask />
    );
    expect(component).toMatchSnapshot();
  });
});
