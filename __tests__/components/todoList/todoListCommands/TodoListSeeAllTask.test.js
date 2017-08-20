
'use strict';

import React                from 'react';
import TodoListSeeAllTask   from '../../../../src/app/components/todoList/todoListCommands/TodoListSeeAllTask';
import renderer             from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

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
