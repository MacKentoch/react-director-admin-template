// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput component', () => {
  it('renders as expected', () => {
    const props = {
      label: '',
      id: '1',
      value: '',
      onChange: jest.fn(),
    };
    const component = shallow(<TextInput {...props} />);
    expect(component).toMatchSnapshot();
  });
});
