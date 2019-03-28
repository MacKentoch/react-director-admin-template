// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TabPanelBody = ({ children }: Props) => (
  <div className="panel-body">
    <div className="tab-content">{children}</div>
  </div>
);

TabPanelBody.displayName = 'TabPanelBody';

TabPanelBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabPanelBody;
