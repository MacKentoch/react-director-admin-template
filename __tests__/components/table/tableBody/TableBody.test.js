
'use strict';

import React              from 'react';
import TableBody          from '../../../../src/app/components/table/tableBody';
import renderer           from 'react-test-renderer';

describe('TableBody component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TableBody>
          <p>table body children here</p>
        </TableBody>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
