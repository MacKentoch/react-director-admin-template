// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TodoListCommands = ({
  children
}) => (
  <div className=" add-task-row">
    {children}
  </div>
);

TodoListCommands.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoListCommands;
