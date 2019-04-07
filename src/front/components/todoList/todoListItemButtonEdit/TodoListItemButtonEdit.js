// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onClick: (event?: SyntheticEvent<>) => any,
};

function TodoListItemButtonEdit({ onClick }: Props) {
  return (
    <button className="btn btn-default btn-xs" onClick={onClick}>
      <i className="fa fa-pencil" />
    </button>
  );
}

TodoListItemButtonEdit.displayName = 'TodoListItemButtonEdit';

TodoListItemButtonEdit.propTypes = {
  onClick: PropTypes.func,
};

export default TodoListItemButtonEdit;
