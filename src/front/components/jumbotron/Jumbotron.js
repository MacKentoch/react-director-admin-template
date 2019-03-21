// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

function Jombotron({ children }: Props) {
  return <div className="jumbotron">{children}</div>;
}

Jombotron.propTypes = {
  children: PropTypes.node,
};

export default Jombotron;
