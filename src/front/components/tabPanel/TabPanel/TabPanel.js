// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TabPanel = ({ children }: Props) => (
  <section className="panel general">{children}</section>
);

TabPanel.displayName = 'TabPanel';

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabPanel;
