// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
};

const TodoList = ({ children }: Props) => (
  <div className="task-content">
    <ul className="task-list">{children}</ul>
  </div>
);

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoList;
