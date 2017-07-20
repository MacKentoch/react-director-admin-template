
'use strict';

import React              from 'react';
import Pagination         from '../../../src/app/components/pagination/Pagination';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Pagination component', () => {
  it('renders as expected', () => {
    const mockProps = {
      sier: 'large',
      numberOfPagination: 5
    };
    const component = renderer.create(
      <div>
        <Pagination {...mockProps } />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
