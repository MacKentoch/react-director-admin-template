
'use strict';

import React                    from 'react';
import TodoListItemButtonEdit   from '../../../../src/app/components/todoList/todoListItemButtonEdit/TodoListItemButtonEdit';
import renderer                 from 'react-test-renderer';
// import { mount }          from 'enzyme';

describe('TodoListItemButtonEdit component', () => {
  const mockProps = {
    onClick:  jest.fn()
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListItemButtonEdit {...mockProps} />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
