// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const TodoListItemButtonEdit = ({
  onClick
}) => (
  <button
    className="btn btn-default btn-xs"
    onClick={onClick}>
    <i className="fa fa-pencil"></i>
  </button>
);

TodoListItemButtonEdit.propTypes = {
  onClick: PropTypes.func
};

export default TodoListItemButtonEdit;
