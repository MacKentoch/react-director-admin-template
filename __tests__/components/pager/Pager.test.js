
'use strict';

import React              from 'react';
import Pager              from '../../../src/app/components/pager/Pager';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Pager component', () => {
  it('renders as expected', () => {
    const mockProps = {
      aligned: true,
      previous: (<p>previous</p>),
      next: (<p>next</p>)
    };
    const component = renderer.create(
      <div>
        <Pager {...mockProps } />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
