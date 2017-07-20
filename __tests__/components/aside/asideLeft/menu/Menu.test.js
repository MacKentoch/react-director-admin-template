'use strict';

import React            from 'react';
import Menu             from '../../../../../src/app/components/aside/asideLeft/menu/Menu';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import { navigation }   from '../../../../../src/app/models/navigation';

const views = navigation.sideMenu[0];

describe('Menu component', () => {
  function createNodeMock() {
    // prevent error from cannot find clientHeight of null (ref from Collapse component)
    return {
      clientHeight: 10
    };
  }

  it('renders as expected', () => {
    // as ViewLink child component uses Link from react-router
    // we need MemoryRouter to set an history for ViewLink
    const component = renderer.create(
      <MemoryRouter>
        <Menu
          headerTitle="header title"
          headerBackColor="#F1F2F3"
          activeView={views.menus[0].name}
          views={views.menus}
          initialCollapseState={false}
        />
      </MemoryRouter>
      ,
      {createNodeMock}
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
