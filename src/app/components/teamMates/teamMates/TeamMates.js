import React, { PropTypes } from 'react';

const TeamMates = ({children}) => {
  return (
    <ul className="list-group teammates">
      {children}
    </ul>
  );
};

TeamMates.propTypes = {
  children: PropTypes.node
};

export default TeamMates;
