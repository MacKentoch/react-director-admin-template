
'use strict';

import React              from 'react';
import TabPanel           from '../../../../src/app/components/tabPanel/tabPanel/TabPanel';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TabPanel component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TabPanel>
          <p>TabPanel children here</p>
        </TabPanel>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
