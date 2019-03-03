// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const ListTweetsContainer = ({
  children
}) => (
  <ul className="media-list">
    {children}
  </ul>
);

ListTweetsContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListTweetsContainer;
