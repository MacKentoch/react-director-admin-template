// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <TodoList>
        <p>a child</p>
      </TodoList>,
    );
    expect(component).toMatchSnapshot();
  });
});
