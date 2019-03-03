// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TabPanelBody = ({
  children
}) => (
  <div className="panel-body">
    <div className="tab-content">
      {children}
    </div>
  </div>
);

TabPanelBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabPanelBody;
