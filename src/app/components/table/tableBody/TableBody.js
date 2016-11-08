import React, { PropTypes } from 'react';

const TableBody = ({children}) => {
  return (
    <tbody>
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableBody;
