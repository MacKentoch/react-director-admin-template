'use strict';

import React          from 'react';
import AsideLeft      from '../../../../src/app/components/aside/asideLeft/AsideLeft';
import renderer       from 'react-test-renderer';
import { navigation } from '../../../../src/app/models/navigation';

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
    const component = renderer.create(
      <div>
        <AsideLeft
          isAnimated
          isCollapsed
          sideMenu={sideMenus}
          currentView={sideMenus[0].menus[0].name}
        />
      </div>,
      { createNodeMock }
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
