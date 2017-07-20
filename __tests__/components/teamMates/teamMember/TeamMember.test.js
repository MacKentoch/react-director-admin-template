
'use strict';

import React              from 'react';
import TeamMember         from '../../../../src/app/components/teamMates/teamMember/TeamMember';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TeamMember component', () => {
  const mockProps = {
    firstname:  'firstname',
    lastname:   'lastname',
    profile:    'user',
    profileColor: 'info'
  };
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TeamMember {...mockProps} />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
