// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import AsideLeft from './AsideLeft';
import { navigation } from '../../../models/navigation';

// mock Horloge since snapshot would be different at each run
jest.mock('../../horloge/Horloge', () => 'Horloge');

const { sideMenu: sideMenus } = navigation;

describe('AsideLeft component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <AsideLeft
          isAnimated
          isCollapsed
          connectionStatus={{
            online: 'online',
            disconnected: 'disconnected',
          }}
          sideMenu={sideMenus}
          showPicture={false}
          userPicture={null}
          username="test"
          userIsConnected
          currentView={sideMenus[0].menus[0].name}
        />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
