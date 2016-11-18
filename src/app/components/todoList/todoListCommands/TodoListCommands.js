import React, {PropTypes} from 'react';

const TodoListCommands = ({children}) => {
  return (
    <div className=" add-task-row">
      {children}
    </div>
  );
};

TodoListCommands.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoListCommands;
