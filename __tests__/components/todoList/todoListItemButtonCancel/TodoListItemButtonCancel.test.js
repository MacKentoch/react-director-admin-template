
'use strict';

import React                    from 'react';
import TodoListItemButtonCancel from '../../../../src/app/components/todoList/todoListItemButtonCancel/TodoListItemButtonCancel';
import renderer                 from 'react-test-renderer';
// import { mount }          from 'enzyme';

describe('TodoListItemButtonCancel component', () => {
  const mockProps = {
    onClick:  jest.fn()
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListItemButtonCancel {...mockProps} />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
