// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TabPanel = ({
  children
}) => (
  <section className="panel general">
    {children}
  </section>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabPanel;
