
'use strict';

import React              from 'react';
import TodoListItem       from '../../../../src/app/components/todoList/todoListItem/TodoListItem';
import renderer           from 'react-test-renderer';
// import { mount }          from 'enzyme';

describe('TodoListItem component', () => {
  const mockProps = {
    id:           1,
    label:        'todo',
    done:         false,
    statusLabel:  'not done',
    statusLabelStyle: 'label-warning',
    onListValidEdit:  jest.fn()
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListItem {...mockProps}>
          <p>todo list children</p>
        </TodoListItem>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
