// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TableRow from './TableRow';

describe('TableRow component', () => {
  it('renders as expected', () => {
    const component = shallow(<TableRow>{<p>a child</p>}</TableRow>);
    expect(component).toMatchSnapshot();
  });
});
