
'use strict';

import React                from 'react';
import TabPanelBodyContent  from '../../../../src/app/components/tabPanel/TabPanelBodyContent/tabPanelBodyContent';
import renderer             from 'react-test-renderer';

describe('TabPanelBodyContent component', () => {
  it('renders as expected', () => {
    const mockProps = {
      id: 1,
      isActive: true
    };
    const component = renderer.create(
      <div>
        <TabPanelBodyContent { ...mockProps }>
          <p>TabPanelBody children here</p>
        </TabPanelBodyContent>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
