// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb component', () => {
  it('renders as expected', () => {
    const mockPath = ['path1', 'subpath1'];

    const component = shallow(<Breadcrumb path={mockPath} />);
    expect(component).toMatchSnapshot();
  });
});
