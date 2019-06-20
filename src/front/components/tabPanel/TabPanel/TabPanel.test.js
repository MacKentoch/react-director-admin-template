// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TabPanel from './TabPanel';

describe('TabPanel component', () => {
  it('renders as expected', () => {
    const component = shallow(<TabPanel>{<p>a child</p>}</TabPanel>);
    expect(component).toMatchSnapshot();
  });
});
