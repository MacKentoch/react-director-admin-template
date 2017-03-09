'use strict';

import React          from 'react';
import AnimatedView   from '../../../src/app/components/animatedView/AnimatedView';
import renderer       from 'react-test-renderer';

describe('AnimatedView component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <AnimatedView>
          <p>
            An animated view content
          </p>
        </AnimatedView>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
