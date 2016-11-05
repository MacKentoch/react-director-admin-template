import React, { PropTypes } from 'react';

const WorkProgressTable = ({children}) => {
  return (
    <table className="table table-hover">
      {children}
    </table>
  );
};

WorkProgressTable.propTypes = {
  children: PropTypes.node.isRequired
};

export default WorkProgressTable;
