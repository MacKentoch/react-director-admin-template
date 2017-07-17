// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TeamMates = ({
  children
}) => (
  <ul className="list-group teammates">
    {children}
  </ul>
);

TeamMates.propTypes = {
  children: PropTypes.node
};

export default TeamMates;
