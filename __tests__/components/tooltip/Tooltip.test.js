
'use strict';

import React        from 'react';
import Tooltip      from '../../../src/app/components/toolTip/Tooltip';
import renderer     from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Tooltip component', () => {
  const mockProps = {
    toolTipId: 1,
    toolTipContent: (<p>tooltip content</p>),
    tooltipPlacement: 'left'
  };
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Tooltip {...mockProps}>
          <p>tooltip content</p>
        </Tooltip>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
