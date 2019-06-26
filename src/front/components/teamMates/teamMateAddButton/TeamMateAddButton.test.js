// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TeamMateAddButton from './TeamMateAddButton';

describe('TeamMateAddButton component', () => {
  it('renders as expected', () => {
    const props = {
      onAdd: jest.fn(),
    };
    const component = shallow(<TeamMateAddButton {...props} />);
    expect(component).toMatchSnapshot();
  });
});
