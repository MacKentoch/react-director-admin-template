// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onClick: (event?: SyntheticEvent<>) => any,
};

const TodoListItemButtonValid = ({ onClick }: Props) => (
  <button className="btn btn-default btn-xs" onClick={onClick}>
    <i className="fa fa-check" />
  </button>
);

TodoListItemButtonValid.displayName = 'TodoListItemButtonValid';

TodoListItemButtonValid.propTypes = {
  onClick: PropTypes.func,
};

export default TodoListItemButtonValid;
