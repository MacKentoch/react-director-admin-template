// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const Jombotron = ({
  children
}) => (
  <div className="jumbotron">
    { children }
  </div>
);

Jombotron.propTypes = {
  children : PropTypes.node
};

export default Jombotron;
