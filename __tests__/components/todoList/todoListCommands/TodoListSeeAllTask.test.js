
'use strict';

import React                from 'react';
import TodoListSeeAllTask   from '../../../../src/app/components/todoList/TodoListCommands/TodoListSeeAllTask';
import renderer             from 'react-test-renderer';

describe('TodoListSeeAllTask component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListSeeAllTask />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
