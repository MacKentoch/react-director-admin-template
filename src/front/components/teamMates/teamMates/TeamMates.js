// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TeamMates = ({ children }: Props) => (
  <ul className="list-group teammates">{children}</ul>
);

TeamMates.displayName = 'TeamMates';

TeamMates.propTypes = {
  children: PropTypes.node,
};

export default TeamMates;
