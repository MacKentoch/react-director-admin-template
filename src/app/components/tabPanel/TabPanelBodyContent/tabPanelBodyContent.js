import React, { PropTypes } from 'react';

const TabPanelBodyContent = ({id, children}) => {
  return (
    <div
      id={id}
      className="tab-pane">
      {children}
    </div>
  );
};

TabPanelBodyContent.propTypes = {
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired
};

export default TabPanelBodyContent;
