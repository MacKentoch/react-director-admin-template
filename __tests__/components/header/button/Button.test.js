
'use strict';

import React          from 'react';
import Button         from '../../../../src/app/components/header/button/Button';
import renderer       from 'react-test-renderer';

describe('Button component', () => {
  const mockToggleSideMenu = jest.fn();

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Button
          toggleSideMenu={mockToggleSideMenu}
        />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
