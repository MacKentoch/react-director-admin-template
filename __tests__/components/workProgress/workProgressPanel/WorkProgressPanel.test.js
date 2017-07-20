'use strict';

import React                from 'react';
import WorkProgressPanel    from '../../../../src/app/components/workProgress/workProgressPanel/WorkProgressPanel';
import renderer             from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('WorkProgressPanel component', () => {
  const mockProps = {
    title: 'a title for test'
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <WorkProgressPanel {...mockProps}>
          <p>
            a work workProgress child
          </p>
        </WorkProgressPanel>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
