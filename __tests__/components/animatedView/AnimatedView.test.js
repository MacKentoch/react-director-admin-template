'use strict';

import React            from 'react';
import AnimatedView     from '../../../src/app/components/animatedView/AnimatedView';
import renderer      from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { 
  MemoryRouter
}                      from 'react-router';

describe('AnimatedView component', () => {
  // we need MemoryRouter to set an history for children that uses Link from react-router

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <AnimatedView>
            <p>
              An animated view content
            </p>
          </AnimatedView>
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
