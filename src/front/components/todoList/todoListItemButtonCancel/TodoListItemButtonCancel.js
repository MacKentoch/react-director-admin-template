// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onClick: (event?: SyntheticEvent<>) => any,
};

function TodoListItemButtonCancel({ onClick }: Props) {
  return (
    <button className="btn btn-default btn-xs" onClick={onClick}>
      <i className="fa fa-times" />
    </button>
  );
}

TodoListItemButtonCancel.displayName = 'TodoListItemButtonCancel';

TodoListItemButtonCancel.propTypes = {
  onClick: PropTypes.func,
};

export default TodoListItemButtonCancel;
