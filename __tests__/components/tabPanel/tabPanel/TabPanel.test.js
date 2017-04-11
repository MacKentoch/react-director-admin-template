
'use strict';

import React              from 'react';
import TabPanel           from '../../../../src/app/components/tabPanel/TabPanel/TabPanel';
import renderer           from 'react-test-renderer';

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
