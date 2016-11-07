import React, { PropTypes } from 'react';

const WorkProgressTableHeaderItem = ({children}) => {
  return (
      <th>
        {children}
      </th>
    </thead>
  );
};

WorkProgressTableHeaderItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default WorkProgressTableHeaderItem;
