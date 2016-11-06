import React, { PropTypes } from 'react';

const WorkProgressTableBody = ({children}) => {
  return (
    <tbody>
      {children}
    </tbody>
  );
};

WorkProgressTableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default WorkProgressTableBody;
