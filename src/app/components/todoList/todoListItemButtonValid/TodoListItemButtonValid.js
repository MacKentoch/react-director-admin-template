import React, { PropTypes } from 'react';

const TodoListItemButtonValid = ({onClick}) => {
  return (
    <button
      className="btn btn-default btn-xs"
      onClick={onClick}>
      <i className="fa fa-check"></i>
    </button>
  );
};

TodoListItemButtonValid.propTypes = {
  onClick: PropTypes.func
};

export default TodoListItemButtonValid;
