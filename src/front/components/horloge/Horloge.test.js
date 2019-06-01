// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Horloge from './Horloge';

describe('Horloge component', () => {
  it('renders as expected', () => {
    const component = shallow(<Horloge />);
    expect(component).toMatchSnapshot();
  });
});
