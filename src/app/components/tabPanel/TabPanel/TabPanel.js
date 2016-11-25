import React, { PropTypes } from 'react';

const TabPanel = ({children}) => {
  return (
    <section className="panel general">
      {children}
    </section>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabPanel;
