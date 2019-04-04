// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TodoListCommands = ({ children }: Props) => (
  <div className=" add-task-row">{children}</div>
);

TodoListCommands.displayName = 'TodoListCommands';

TodoListCommands.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoListCommands;
