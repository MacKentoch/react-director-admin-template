
'use strict';

import React              from 'react';
import Notifications      from '../../../src/app/components/notifications/Notifications';
import renderer           from 'react-test-renderer';

describe('Notifications component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Notifications />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
