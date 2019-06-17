// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader';

describe('TableHeader component', () => {
  it('renders as expected', () => {
    const component = shallow(<TableHeader>{<p>a child</p>}</TableHeader>);
    expect(component).toMatchSnapshot();
  });
});
