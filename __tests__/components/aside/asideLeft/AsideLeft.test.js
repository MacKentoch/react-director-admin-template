'use strict';

import React            from 'react';
import AsideLeft        from '../../../../src/app/components/aside/asideLeft/AsideLeft';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { navigation }   from '../../../../src/app/models/navigation';
import { MemoryRouter } from 'react-router';

// mock Horloge since snapshot would be different at each run
jest.mock(
  '../../../../src/app/components/horloge/Horloge',
  () => 'Horloge'
);

const sideMenus = navigation.sideMenu;

describe('AsideLeft component', () => {
  function createNodeMock() {
    return {
      focus: () => {}
    };
  }
  it('renders as expected', () => {
    // we need MemoryRouter to set an history
    // for children that uses Link from react-router
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <AsideLeft
            isAnimated
            isCollapsed
            sideMenu={sideMenus}
            currentView={sideMenus[0].menus[0].name}
          />
        </MemoryRouter>
      </div>,
      { createNodeMock }
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
