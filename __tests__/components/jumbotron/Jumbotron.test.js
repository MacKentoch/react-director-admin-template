
'use strict';

import React          from 'react';
import Jumbotron      from '../../../src/app/components/jumbotron/Jumbotron';
import renderer       from 'react-test-renderer';

describe('Jumbotron component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Jumbotron >
          <p>jumbotron</p>
        </Jumbotron>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
