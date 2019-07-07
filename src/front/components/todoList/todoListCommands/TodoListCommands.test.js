// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TodoListCommands from './TodoListCommands';

describe('TodoListCommands component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <TodoListCommands>
        <p>a child</p>
      </TodoListCommands>,
    );
    expect(component).toMatchSnapshot();
  });
});
