
'use strict';

import React              from 'react';
import StatsCard          from '../../../src/app/components/statsCard/StatsCard';
import renderer           from 'react-test-renderer';

describe('StatsCard component', () => {
  it('renders as expected', () => {
    const mockProps = {
      statValue: '10',
      statLabel: 'stat label',
      icon: (<i className="fa fa-hand-peace-o" />),
      backColor: 'violet'
    };
    const component = renderer.create(
      <div>
        <StatsCard {...mockProps } />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
