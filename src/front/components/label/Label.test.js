// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label component', () => {
  it('renders as expected', () => {
    const props = {
      text: 'label text',
      type: 'info',
    };

    const component = shallow(<Label {...props} />);
    expect(component).toMatchSnapshot();
  });
});
