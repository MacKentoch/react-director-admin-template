import React, { PropTypes } from 'react';
import TeamMember from './teamMember/TeamMember';

const TeamMates = (props) => {
  const { members } = props;

  return (
    <div className="panel">
      <header className="panel-heading">
        Teammates
      </header>
      <ul className="list-group teammates">
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
      </ul>
      <div className="panel-footer bg-white">
        <button className="btn btn-primary btn-addon btn-sm">
          <i className="fa fa-plus"></i>
          Add Teammate
        </button>
      </div>
    </div>
  );
};

TeamMates.propTypes = {
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

export default TeamMates;
