import React, { PropTypes } from 'react';

const TodoListItemButtonCancel = ({onClick}) => {
  return (
    <button
      className="btn btn-default btn-xs"
      onClick={onClick}>
      <i className="fa fa-times"></i>
    </button>
  );
};

TodoListItemButtonCancel.propTypes = {
  onClick: PropTypes.func
};

export default TodoListItemButtonCancel;
