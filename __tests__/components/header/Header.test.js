
'use strict';

import React          from 'react';
import Header         from '../../../src/app/components/header/Header';
import renderer       from 'react-test-renderer';

describe('Header component', () => {
  const mockToggleSideMenu = jest.fn();

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Header
          toggleSideMenu={mockToggleSideMenu}
        />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
