// @flow weak

import React        from 'react';
import PropTypes    from 'prop-types';

const TodoListItemButtonCancel = ({
  onClick
}) => (
  <button
    className="btn btn-default btn-xs"
    onClick={onClick}>
    <i className="fa fa-times"></i>
  </button>
);

TodoListItemButtonCancel.propTypes = {
  onClick: PropTypes.func
};

export default TodoListItemButtonCancel;
