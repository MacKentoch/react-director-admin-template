// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Menu from '../Menu';
import { navigation } from '../../../../../models/navigation';

describe('AnimatedView component', () => {
  const views = navigation.sideMenu[0];

  function createNodeMock() {
    // prevent error from cannot find clientHeight of null (ref from Collapse component)
    return {
      clientHeight: 10,
    };
  }

  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <Menu
          headerTitle="header title"
          headerBackColor="#F1F2F3"
          activeView={views.menus[0].name}
          views={views.menus}
          initialCollapseState={false}
        />
      </MemoryRouter>,
      { createNodeMock },
    );
    expect(component).toMatchSnapshot();
  });
});
