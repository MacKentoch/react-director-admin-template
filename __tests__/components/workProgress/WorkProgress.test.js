'use strict';

import React                from 'react';
import WorkProgress         from '../../../src/app/components/workProgress/WorkProgress';
import renderer             from 'react-test-renderer';

describe('WorkProgress component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <WorkProgress />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
