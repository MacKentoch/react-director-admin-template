
'use strict';

import React              from 'react';
import TeamMates          from '../../../../src/app/components/teamMates/teamMates/TeamMates';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TeamMates component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TeamMates>
          <p>
            TeamMates children here
          </p>
        </TeamMates>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
