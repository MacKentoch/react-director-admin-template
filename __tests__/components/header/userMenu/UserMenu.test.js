
'use strict';

import React          from 'react';
import UserMenu       from '../../../../src/app/components/header/userMenu/UserMenu';
import renderer       from 'react-test-renderer';

describe('UserMenu component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <UserMenu />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
