
'use strict';

import React              from 'react';
import TeamMatesDemo      from '../../../src/app/components/teamMates/TeamMatesDemo';
import renderer           from 'react-test-renderer';

describe('TeamMatesDemo component', () => {
  const mockProps = {
    members: [
      {
        firstname:  'firstname1',
        lastname:   'lastname1',
        profile:    'user1',
        profileColor: 'info'
      },
      {
        firstname:  'firstname2',
        lastname:   'lastname2',
        profile:    'user2',
        profileColor: 'success'
      }
    ]
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TeamMatesDemo {...mockProps} />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
