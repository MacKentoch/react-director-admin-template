import React, { PropTypes } from 'react';
import TeamMates            from './teamMates/TeamMates';
import TeamMember           from './teamMember/TeamMember';
import TeamMateAddButton    from './teamMateAddButton/TeamMateAddButton';
import Panel                from '../panel/Panel';


const TeamMatesDemo = (props) => {
  const { members } = props;

  return (
    <Panel
      hasTitle={true}
      title={'Teammates'}>
      <TeamMates>
        {
          members.map(
            (member, memberIndex) => {
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
            }
          )
        }
      </TeamMates>
      <TeamMateAddButton />
    </Panel>
  );
};

TeamMatesDemo.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profile: PropTypes.string,
      profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success'])
    })
  )
};

export default TeamMatesDemo;
