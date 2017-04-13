import React, { PropTypes } from 'react';
import cx from 'classnames';

const TabPanelBodyContent = ({id, isActive, children}) => {
  return (
    <div
      id={id}
      className={
        cx({
          'tab-pane': true,
          active:  isActive
        })
      }>
      {children}
    </div>

  );
};

TabPanelBodyContent.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool
};

TabPanelBodyContent.defaultProps = {
  isActive: false
};

export default TabPanelBodyContent;
