
'use strict';

import React              from 'react';
import TableHeader        from '../../../../src/app/components/table/tableHeader/TableHeader';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TableHeader component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TableHeader>
          <p>table header children here</p>
        </TableHeader>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
