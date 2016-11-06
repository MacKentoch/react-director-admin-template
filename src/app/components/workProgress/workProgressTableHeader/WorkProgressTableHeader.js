import React, { PropTypes } from 'react';

const WorkProgressTableHeader = ({children}) => {
  return (
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  );
};

WorkProgressTableHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default WorkProgressTableHeader;
