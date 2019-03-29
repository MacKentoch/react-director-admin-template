// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  id: string | number,
  children: any,
  isActive?: boolean,
};

const TabPanelBodyContent = ({ id, isActive = false, children }: Props) => (
  <div
    id={id}
    className={cx({
      'tab-pane': true,
      active: isActive,
    })}
  >
    {children}
  </div>
);

TabPanelBodyContent.displayName = 'TabPanelBodyContent';

TabPanelBodyContent.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

export default TabPanelBodyContent;
