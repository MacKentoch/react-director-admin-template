
'use strict';

import React              from 'react';
import TodoList           from '../../../../src/app/components/todoList/todoList/TodoList';
import renderer           from 'react-test-renderer';

describe('TodoList component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoList>
          <p>todo list children</p>
        </TodoList>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
