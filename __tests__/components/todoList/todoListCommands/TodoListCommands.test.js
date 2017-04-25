
'use strict';

import React              from 'react';
import TodoListCommands   from '../../../../src/app/components/todoList/TodoListCommands/TodoListCommands';
import renderer           from 'react-test-renderer';

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
