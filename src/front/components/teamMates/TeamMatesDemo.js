// @flow

import React from 'react';
import PropTypes from 'prop-types';
import TeamMates from './teamMates/TeamMates';
import TeamMember from './teamMember/TeamMember';
import TeamMateAddButton from './teamMateAddButton/TeamMateAddButton';
import Panel from '../panel/Panel';

type Member = {
  picture: string,
  firstname: string,
  lastname: string,
  profile: string,
  profileColor: 'danger' | 'warning' | 'info' | 'success',
};
type Props = {
  members: Array<Member>,
};

const TeamMatesDemo = ({ members = [] }: Props) => (
  <Panel hasTitle={true} title={'Teammates'}>
    <TeamMates>
      {members.map((member, memberIndex) => {
        return (
          <TeamMember
            key={memberIndex}
            picture={member.picture}
            firstname={member.firstname}
            lastname={member.lastname}
            profile={member.profile}
            profileColor={member.profileColor}
          />
        );
      })}
    </TeamMates>
    <TeamMateAddButton
      onAdd={() => console.log('some add team mate event click')}
    />
  </Panel>
);

TeamMatesDemo.displayName = 'TeamMatesDemo';

TeamMatesDemo.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profile: PropTypes.string,
      profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
    }),
  ),
};

export default TeamMatesDemo;
