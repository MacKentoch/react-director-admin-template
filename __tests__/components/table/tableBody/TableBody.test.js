
'use strict';

import React              from 'react';
import TableBody          from '../../../../src/app/components/table/tableBody/TableBody';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

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
