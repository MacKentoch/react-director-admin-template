'use strict';

import React, { PropTypes } from 'react';

const AsideRight = (props) => {
  return (
    <aside className="right-side">
      { props.children }
    </aside>
  );
};

AsideRight.propTypes = {
  children: PropTypes.node.isRequired
};

export default AsideRight;
