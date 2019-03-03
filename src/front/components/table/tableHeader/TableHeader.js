// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TableHeader = ({
  children
}) => (
  <thead>
    <tr>
      {children}
    </tr>
  </thead>
);

TableHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableHeader;
