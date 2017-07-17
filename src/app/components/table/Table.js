// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const Table = ({
  children
}) => (
  <table className="table table-hover">
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
