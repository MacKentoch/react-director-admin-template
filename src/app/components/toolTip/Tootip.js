// @flow weak

import React          from 'react';
import PropTypes      from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip        from 'react-bootstrap/lib/Tooltip';

const ToolTip = ({
  toolTipId,
  toolTipContent,
  tooltipPlacement,
  children
}) => (
  <OverlayTrigger
    placement={tooltipPlacement}
    overlay={
      <Tooltip id={toolTipId}>
        {toolTipContent}
      </Tooltip>
    }>
    {children}
  </OverlayTrigger>
);

ToolTip.propTypes = {
  toolTipId:        PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  toolTipContent:   PropTypes.node.isRequired,
  tooltipPlacement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children:         PropTypes.node.isRequired
};

ToolTip.defaultProps = {
  tooltipPlacement: 'top'
};

export default ToolTip;
