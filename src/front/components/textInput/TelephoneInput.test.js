// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TelephoneInput from './TelephoneInput';

describe('TelephoneInput component', () => {
  it('renders as expected', () => {
    const props = {
      label: '',
      id: '1',
      value: '',
      onChange: jest.fn(),
    };
    const component = shallow(<TelephoneInput {...props} />);
    expect(component).toMatchSnapshot();
  });
});
