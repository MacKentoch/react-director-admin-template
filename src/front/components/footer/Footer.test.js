// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders as expected', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
