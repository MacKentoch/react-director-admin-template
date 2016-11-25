import React, { PropTypes } from 'react';

const TabPanelBody = ({children}) => {
  return (
    <div className="panel-body">
      <div className="tab-content">
        {children}
      </div>
    </div>
    );
};

TabPanelBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabPanelBody;
