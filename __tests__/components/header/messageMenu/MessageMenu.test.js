
'use strict';

import React          from 'react';
import MessageMenu    from '../../../../src/app/components/header/messageMenu/MessageMenu';
import renderer       from 'react-test-renderer';

describe('MessageMenu component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MessageMenu />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
