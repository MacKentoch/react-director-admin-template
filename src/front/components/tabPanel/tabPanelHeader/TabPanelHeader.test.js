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

  it.only('should set first active by default whne none active from props', () => {
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
    expect(
      component
        .find('#listitem')
        .first()
        .hasClass('active'),
    ).toBe(true);
  });
});
