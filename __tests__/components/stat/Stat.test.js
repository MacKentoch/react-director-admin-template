
'use strict';

import React              from 'react';
import Stat               from '../../../src/app/components/stat/Stat';
import renderer           from 'react-test-renderer';

describe('Stat component', () => {
  it('renders as expected', () => {
    const mockProps = {
      statFaIconName: 'fa-user',
      statIconColor: '#E2E2E2',
      statLabel: 'stat label',
      statIconSpin: false
    };
    const component = renderer.create(
      <div>
        <Stat {...mockProps } />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
