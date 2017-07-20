'use strict';

import React              from 'react';
import TodoListAddTask    from '../../../../src/app/components/todoList/todoListCommands/TodoListAddTask';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TodoListAddTask component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListAddTask />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
