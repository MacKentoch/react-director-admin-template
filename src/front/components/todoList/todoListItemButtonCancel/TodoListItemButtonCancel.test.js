// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TodoListItemButtonCancel from './TodoListItemButtonCancel';

describe('TodoListItemButtonCancel component', () => {
  it('renders as expected', () => {
    const props = {
      onClick: jest.fn(),
    };

    const component = shallow(<TodoListItemButtonCancel {...props} />);
    expect(component).toMatchSnapshot();
  });
});
