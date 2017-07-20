'use strict';

import React          from 'react';
import AsideRight     from '../../../../src/app/components/aside/asideRight/AsideRight';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme


describe('AsideRight component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <AsideRight
          isAnimated
          isExpanded>
          <p>
            Aside right children
          </p>
        </AsideRight>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
