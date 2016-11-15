import React, { PropTypes } from 'react';

const TodoListItemButtonEdit = ({onClick}) => {
  return (
    <button
      className="btn btn-default btn-xs"
      onClick={onClick}>
      <i className="fa fa-pencil"></i>
    </button>
  );
};

TodoListItemButtonEdit.propTypes = {
  onClick: PropTypes.func
};

export default TodoListItemButtonEdit;
