// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TextAreaInput from './TextAreaInput';

describe('TextAreaInput component', () => {
  it('renders as expected', () => {
    const props = {
      label: '',
      id: '1',
      nbrows: 1,
      value: '',
      onChange: jest.fn(),
    };
    const component = shallow(<TextAreaInput {...props} />);
    expect(component).toMatchSnapshot();
  });
});
