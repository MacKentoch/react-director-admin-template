
'use strict';

import React          from 'react';
import UserMenu       from '../../../../src/app/components/header/userMenu/UserMenu';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

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
