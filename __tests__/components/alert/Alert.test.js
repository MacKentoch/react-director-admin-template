'use strict';

import React     from 'react';
import Alert     from '../../../src/app/components/alert/Alert';
import renderer  from 'react-test-renderer';

describe('Alert component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Alert type="info">
          <p>an alert</p>
        </Alert>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
