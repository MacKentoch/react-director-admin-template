// @flow

import React from 'react';
import { shallow } from 'enzyme';
import BasicForms from './BasicForms';

describe('BasicForms component', () => {
  it('renders as expected', () => {
    const props = {
      headerTitle: 'basic form header title',
    };

    const component = shallow(<BasicForms {...props} />);
    expect(component).toMatchSnapshot();
  });
});
