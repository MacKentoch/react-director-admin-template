import React, { PropTypes } from 'react';

const ListTweetsContainer = ({children}) => {
  return (
    <ul className="media-list">
      {children}
    </ul>
  );
};

ListTweetsContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListTweetsContainer;
