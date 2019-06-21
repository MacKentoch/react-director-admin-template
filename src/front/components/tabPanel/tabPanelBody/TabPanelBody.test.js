// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TabPanelBody from './TabPanelBody';

describe('TabPanelBody component', () => {
  it('renders as expected', () => {
    const component = shallow(<TabPanelBody>{<p>a child</p>}</TabPanelBody>);
    expect(component).toMatchSnapshot();
  });
});
