// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TableCol from './TableCol';

describe('TableCol component', () => {
  it('renders as expected', () => {
    const component = shallow(<TableCol>{<p>a child</p>}</TableCol>);
    expect(component).toMatchSnapshot();
  });
});
