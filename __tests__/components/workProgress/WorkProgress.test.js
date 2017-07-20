'use strict';

import React                from 'react';
import WorkProgress         from '../../../src/app/components/workProgress/WorkProgress';
import renderer             from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

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
