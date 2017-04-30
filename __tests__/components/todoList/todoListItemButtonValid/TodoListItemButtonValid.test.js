
'use strict';

import React                    from 'react';
import TodoListItemButtonValid  from '../../../../src/app/components/todoList/todoListItemButtonValid/TodoListItemButtonValid';
import renderer                 from 'react-test-renderer';
// import { mount }          from 'enzyme';

describe('TodoListItemButtonValid component', () => {
  const mockProps = {
    onClick:  jest.fn()
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListItemButtonValid {...mockProps} />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
