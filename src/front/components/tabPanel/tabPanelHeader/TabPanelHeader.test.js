// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import TabPanelHeader from './TabPanelHeader';

describe('TabPanelHeader component', () => {
  it('renders as expected', () => {
    const props = {
      tabItems: [
        {
          isActive: true,
          name: '',
          tablink: '',
        },
      ],
    };
    const component = shallow(<TabPanelHeader {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should not be active by default', () => {
    const props = {
      tabItems: [
        {
          isActive: false,
          name: '',
          tablink: '',
        },
        {
          isActive: false,
          name: '',
          tablink: '',
        },
      ],
    };
    const component = mount(<TabPanelHeader {...props} />);

    expect(component.find('#listitem').hasClass('active')).toBe(false);

    component.setProps({ isActive: true });
    expect(component.find('#listitem').hasClass('active')).toBe(true);
  });
});
