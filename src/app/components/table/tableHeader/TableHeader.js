import React, { PropTypes } from 'react';

const TableHeader = ({children}) => {
  return (
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableHeader;
