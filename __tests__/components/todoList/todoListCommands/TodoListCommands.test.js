
'use strict';

import React              from 'react';
import TodoListCommands   from '../../../../src/app/components/todoList/todoListCommands/TodoListCommands';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TodoListCommands component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListCommands>
          <p>todo list children</p>
        </TodoListCommands>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
