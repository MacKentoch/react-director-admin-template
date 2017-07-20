'use strict';

import React          from 'react';
import BasicForms     from '../../../src/app/components/basicForms/BasicForms';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme


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
