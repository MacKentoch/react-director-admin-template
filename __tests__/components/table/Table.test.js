
'use strict';

import React              from 'react';
import Table              from '../../../src/app/components/table/Table';
import renderer           from 'react-test-renderer';

describe('Table component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Table>
          <p>table children here</p>
        </Table>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
