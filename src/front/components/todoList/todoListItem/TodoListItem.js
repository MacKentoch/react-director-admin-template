// @flow
/* eslint no-console:0 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TodoListItemButtonEdit from '../todoListItemButtonEdit/TodoListItemButtonEdit';
import TodoListItemButtonValid from '../todoListItemButtonValid/TodoListItemButtonValid';
import TodoListItemButtonCancel from '../todoListItemButtonCancel/TodoListItemButtonCancel';
import { useCallback } from 'react';

type Props = {
  id: string | number,
  label: string,
  done: boolean,
  statusLabel: string,
  statusLabelStyle: | 'label-success'
    | 'label-danger'
    | 'label-warning'
    | 'label-primary'
    | 'label-inverse',
  onListValidEdit: (isChecked: boolean) => any,
};

function TodoListItem({
  id,
  label = '',
  done = false,
  statusLabel = '',
  statusLabelStyle = 'label-success',
  onListValidEdit = () => {},
}: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const prevDoneRef = useRef();

  useEffect(() => {
    prevDoneRef.current = done;
    setIsChecked(done);
  }, []);

  useEffect(() => {
    const prevDone = prevDoneRef.current;
    if (done !== prevDone) {
      prevDoneRef.current = done;
      setIsChecked(done);
    }
  }, [done]);

  const setCheckedProp = useCallback(
    checkedValue => {
      if (checkedValue !== isChecked) {
        setIsChecked(checkedValue);
      }
    },
    [isChecked],
  );

  const handlesOnListEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handlesOnListCancelEdit = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handlesOnListValidEdit = useCallback(() => {
    onListValidEdit(isChecked);
    setIsEditing(false);
  }, [isChecked]);

  return (
    <li>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={setCheckedProp}
          className="flat-grey list-child"
        />
      </div>
      <div className="task-title">
        <span className="task-title-sp">{label}</span>

        <span className={`label ${statusLabelStyle}`}>{statusLabel}</span>

        <div className="pull-right hidden-phone">
          {isEditing ? (
            <div>
              <TodoListItemButtonValid onClick={handlesOnListValidEdit} />
              <TodoListItemButtonCancel onClick={handlesOnListCancelEdit} />
            </div>
          ) : (
            <TodoListItemButtonEdit onClick={handlesOnListEdit} />
          )}
        </div>
      </div>
    </li>
  );
}

TodoListItem.displayName = 'TodoListItem';

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  done: PropTypes.bool,
  statusLabel: PropTypes.string,
  statusLabelStyle: PropTypes.oneOf([
    'label-success',
    'label-danger',
    'label-warning',
    'label-primary',
    'label-inverse',
  ]),
  onListValidEdit: PropTypes.func,
};

export default TodoListItem;
