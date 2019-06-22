// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import TabPanelBodyContent from './tabPanelBodyContent';

describe('TabPanelBodyContent component', () => {
  it('renders as expected', () => {
    const props = {
      id: 1,
      isActive: true,
    };
    const component = shallow(
      <TabPanelBodyContent {...props}>{<p>a child</p>}</TabPanelBodyContent>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should not be active by default', () => {
    const props = {
      id: 1,
      isActive: undefined,
    };
    const component = mount(
      <TabPanelBodyContent {...props}>{<p>a child</p>}</TabPanelBodyContent>,
    );

    expect(component.find('div.tab-pane').hasClass('active')).toBe(false);

    component.setProps({ isActive: true });
    expect(component.find('div.tab-pane').hasClass('active')).toBe(true);
  });
});
