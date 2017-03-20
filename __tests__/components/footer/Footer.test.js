
'use strict';

import React          from 'react';
import Footer         from '../../../src/app/components/footer/Footer';
import renderer       from 'react-test-renderer';

describe('Footer component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Footer />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
