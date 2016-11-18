import React, {PropTypes} from 'react';

const TodoList = ({children}) => {
  return (
    <div className="task-content">
      <ul className="task-list">
        {children}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoList;
