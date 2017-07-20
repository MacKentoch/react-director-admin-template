
'use strict';

import React                    from 'react';
import TodoListDemo             from '../../../src/app/components/todoList/TodoListDemo';
import renderer                 from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
// import { mount }          from 'enzyme';

describe('TodoListDemo component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TodoListDemo />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
