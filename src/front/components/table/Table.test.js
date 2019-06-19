// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table component', () => {
  it('renders as expected', () => {
    const component = shallow(<Table>{<p>a child</p>}</Table>);
    expect(component).toMatchSnapshot();
  });
});
