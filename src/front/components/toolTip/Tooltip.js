// @flow

import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

type Props = {
  toolTipId: string | number,
  toolTipContent: any,
  tooltipPlacement?: 'left' | 'right' | 'top' | 'bottom',
  children: any,
};

const ToolTip = ({
  toolTipId,
  toolTipContent,
  tooltipPlacement,
  children,
}: Props) => (
  <OverlayTrigger
    placement={tooltipPlacement}
    overlay={<Tooltip id={toolTipId}>{toolTipContent}</Tooltip>}
  >
    {children}
  </OverlayTrigger>
);

ToolTip.displayName = 'ToolTip';

ToolTip.defaultProps = {
  tooltipPlacement: 'top',
};

export default ToolTip;
