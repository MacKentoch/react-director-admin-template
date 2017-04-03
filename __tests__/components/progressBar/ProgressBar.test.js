
'use strict';

import React              from 'react';
import ProgressBar        from '../../../src/app/components/progressBar/ProgressBar';
import renderer           from 'react-test-renderer';

describe('ProgressBar component', () => {
  it('renders as expected', () => {
    const mockProps = {
      barSize: 'xs',
      barStriped: true,
      barStyle: 'primary',
      active: false,
      valueNow: 10,
      valueMin: 0,
      valueMax: 50,
      screenReadersText: 'progress'
    };
    const component = renderer.create(
      <div>
        <ProgressBar {...mockProps } />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
