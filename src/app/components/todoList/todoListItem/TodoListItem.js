/* eslint no-console:0 */

import React, {
  Component,
  PropTypes
}                               from 'react';
import shallowCompare           from 'react-addons-shallow-compare';
import TodoListItemButtonEdit   from '../todoListItemButtonEdit/TodoListItemButtonEdit';
import TodoListItemButtonValid  from '../todoListItemButtonValid/TodoListItemButtonValid';
import TodoListItemButtonCancel from '../todoListItemButtonCancel/TodoListItemButtonCancel';


class TodoListItem extends Component {
  state = {
    isChecked: false,
    isEditing: false
  };

  componentDidMount() {
    const { done } = this.props;
    this.setCheckedProp(done);
  }

  componentWillReceiveProps(nextProps) {
    const { done } = this.props;
    if (nextProps.done !== done) {
      this.setCheckedProp(nextProps.done);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, statusLabel, statusLabelStyle } = this.props;
    const { isChecked, isEditing } = this.state;

    return (
      <li>
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            className="flat-grey list-child"
          />
        </div>
        <div className="task-title">

          <span className="task-title-sp">
            {label}
          </span>

          <span className={`label ${statusLabelStyle}`}>
            {statusLabel}
          </span>

          <div className="pull-right hidden-phone">
            {
              isEditing
              ? <div>
                  <TodoListItemButtonValid onClick={this.handlesOnListValidEdit} />
                  <TodoListItemButtonCancel onClick={this.handlesOnListCancelEdit} />
                </div>
              : <TodoListItemButtonEdit onClick={this.handlesOnListEdit} />
            }
          </div>
        </div>
      </li>
    );
  }

  setCheckedProp = (checkedValue) => {
    if (checkedValue !== this.state.isChecked) {
      this.setState({ isChecked: checkedValue });
    }
  }

  handlesOnListEdit = () => {
    this.setState({ isEditing: true});
  }

  handlesOnListCancelEdit = () => {
    this.setState({ isEditing: false});
  }

  handlesOnListValidEdit = () => {
    const { onListValidEdit } = this.props;
    const { isChecked } = this.state;

    onListValidEdit(isChecked);
    this.setState({ isEditing: false});
  }
}

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  done: PropTypes.bool,
  statusLabel: PropTypes.string,
  statusLabelStyle: PropTypes.oneOf(['label-success', 'label-danger', 'label-warning', 'label-primary', 'label-inverse']),
  onListValidEdit: PropTypes.func
};

TodoListItem.defaultProps = {
  label: '',
  statusLabelStyle: 'label-success',
  done: false
};

export default TodoListItem;
