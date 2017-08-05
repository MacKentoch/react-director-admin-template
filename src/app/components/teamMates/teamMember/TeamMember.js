// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import DamonIMG   from '../../../img/Damon.png';
import JoeIMG     from '../../../img/Joe.png';
import EmmaIMG    from '../../../img/Emma.png';
import JannieIMG  from '../../../img/Jannie.png';

const images = [
  { firstname: 'Damon',   img: DamonIMG },
  { firstname: 'Joe',     img: JoeIMG },
  { firstname: 'Emma',    img: EmmaIMG },
  { firstname: 'Jannie',  img: JannieIMG }
];

function getUserPicture(userFirstname = '') {
  const user = images.find(({ firstname }) => (firstname === userFirstname));
  return user ? user.img : '';
}

const TeamMember = ({
  // picture,
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
          src={getUserPicture(firstname)}
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
