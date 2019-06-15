// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TableBody from './TableBody';

describe('TableBody component', () => {
  it('renders as expected', () => {
    const component = shallow(<TableBody>{<p>a child</p>}</TableBody>);
    expect(component).toMatchSnapshot();
  });
});
