// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const ListTweetsContainer = ({ children }: Props) => (
  <ul className="media-list">{children}</ul>
);

ListTweetsContainer.displayName = 'ListTweetsContainer';

ListTweetsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListTweetsContainer;
