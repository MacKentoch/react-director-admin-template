// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from './TodoListItem';

describe('TodoListItem component', () => {
  it('renders as expected', () => {
    const props = {
      id: 1,
      label: 'label',
      done: false,
      statusLabel: 'statusLabel',
      statusLabelStyle: 'label-success',
      onListValidEdit: jest.fn(),
    };

    const component = shallow(<TodoListItem {...props} />);
    expect(component).toMatchSnapshot();
  });
});
