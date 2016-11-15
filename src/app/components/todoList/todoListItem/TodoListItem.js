/* eslint no-console:0 */

import React, { PropTypes }     from 'react';
import TodoListItemButtonEdit   from './todoListItemButtonEdit/TodoListItemButtonEdit';
import TodoListItemButtonValid  from './todoListItemButtonValid/TodoListItemButtonValid';
import TodoListItemButtonCancel from './todoListItemButtonCancel/TodoListItemButtonCancel';


const TodoListItem = ({label, done, statusLabel}) => {
  return (
    <li>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={done}
          className="flat-grey list-child"
        />
      </div>
      <div className="task-title">

        <span className="task-title-sp">
          {label}
        </span>

        <span className="label label-success">
          {statusLabel}
        </span>

        <div className="pull-right hidden-phone">
          <TodoListItemButtonEdit onClick={() => console.log('TodoListItemButtonEdit onClick event')} />
          <TodoListItemButtonValid onClick={() => console.log('TodoListItemButtonValid onClick event')} />
          <TodoListItemButtonCancel onClick={() => console.log('TodoListItemButtonCancel onClick event')} />
        </div>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  done: PropTypes.bool,
  statusLabel: PropTypes.string
};

TodoListItem.defaultProps = {
  label: '',
  done: false
};

export default TodoListItem;
