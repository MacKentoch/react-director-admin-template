import React, { PropTypes } from 'react';

const TodoListItem = ({}) => {
  return (
    <li>
      <div className="task-checkbox">
        <input
          type="checkbox"
          className="flat-grey list-child"
        />
      </div>
      <div className="task-title">
        <span className="task-title-sp">
          Director is Modern Dashboard
        </span>
        <span className="label label-success">
          2 Days
        </span>
        <div className="pull-right hidden-phone">
          <button className="btn btn-default btn-xs">
            <i className="fa fa-check"></i>
          </button>
          <button className="btn btn-default btn-xs">
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-default btn-xs">
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  
};

export default TodoListItem;
