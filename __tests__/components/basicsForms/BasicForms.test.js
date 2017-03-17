'use strict';

import React          from 'react';
import BasicForms     from '../../../src/app/components/basicForms/BasicForms';
import renderer       from 'react-test-renderer';


describe('BasicForms component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <BasicForms
          headerTitle="basic form header title"
        />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
