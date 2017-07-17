// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TeamMember = ({
  picture,
  firstname,
  lastname,
  profile,
  profileColor 
}) => {
  const profileClass = `pull-right label label-${profileColor} inline m-t-15`;
  return (
    <li className="list-group-item">
      <a href="">
        <img
          src={picture}
          width="50"
          height="50"
          />
      </a>
      <span className={profileClass}>
        { profile }
      </span>
      <a href="">
        { `${firstname} ${lastname}` }
      </a>
    </li>
  );
};

TeamMember.propTypes = {
  picture:      PropTypes.string,
  firstname:    PropTypes.string,
  lastname:     PropTypes.string,
  profile:      PropTypes.string,
  profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success'])
};

TeamMember.defaultProps = {
  firstname:    '',
  lastname:     '',
  profile:      '',
  profileColor: 'info'
};

export default TeamMember;
