'use strict';

import React from 'react';

const Jombotron = (props) => {
  return (
    <div className="jumbotron">
      {props.children}
    </div>
  );
};

Jombotron.propTypes = {
  children : React.PropTypes.node
};

export default Jombotron;
