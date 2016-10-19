import React from 'react';

const Jombotron = ({ children }) => {
  return (
    <div className="jumbotron">
      { children }
    </div>
  );
};

Jombotron.propTypes = {
  children : React.PropTypes.node
};

export default Jombotron;
