import React, { PropTypes } from 'react';

const TableCol = ({children}) => {
  return (
    <td>
      {children}
    </td>
  );
};

TableCol.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableCol;
