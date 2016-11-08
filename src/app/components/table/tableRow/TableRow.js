import React, { PropTypes } from 'react';

const TableRow = ({children}) => {
  return (
    <tr>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableRow;
