
'use strict';

import React          from 'react';
import Label          from '../../../src/app/components/label/label';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Label component', () => {
  it('renders as expected', () => {
    const mockProps = {
      text: 'text label',
      type: 'primary'
    };
    const component = renderer.create(
      <div>
        <Label {...mockProps} />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
