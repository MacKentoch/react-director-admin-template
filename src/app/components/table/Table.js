import React, { PropTypes } from 'react';

const Table = ({children}) => {
  return (
    <table className="table table-hover">
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
