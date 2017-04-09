
'use strict';

import React              from 'react';
import TableRow           from '../../../../src/app/components/table/tableRow/TableRow';
import renderer           from 'react-test-renderer';

describe('TableRow component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TableRow>
          <p>table row children here</p>
        </TableRow>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
