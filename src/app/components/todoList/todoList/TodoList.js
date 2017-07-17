// @flow weak
import React        from 'react';
import PropTypes    from 'prop-types';

const TodoList = ({
  children
}) => (
  <div className="task-content">
    <ul className="task-list">
      {children}
    </ul>
  </div>
);

TodoList.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoList;
