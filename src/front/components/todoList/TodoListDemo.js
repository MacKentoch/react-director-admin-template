// @flow

import React, { useCallback } from 'react';
import TodoList from './todoList/TodoList';
import TodoListItem from './todoListItem/TodoListItem';
import TodoListCommands from './todoListCommands/TodoListCommands';
import TodoListAddTask from './todoListCommands/TodoListAddTask';
import TodoListSeeAllTask from './todoListCommands/TodoListSeeAllTask';
import Panel from '../panel/Panel';

function TodoListDemo() {
  const handlesOnListValidEdit = useCallback(
    (id: string | number) => (isChecked: boolean) => {
      console.log(
        `item validated id: "${id}" is checked: `,
        isChecked ? 'yes' : 'no',
      );
    },
    [],
  );

  return (
    <Panel
      hasTitle={true}
      title={'Todo list'}
      sectionCustomClass="tasks-widget"
    >
      <TodoList>
        <TodoListItem
          id="1"
          label="Director is Modern Dashboard"
          done={false}
          statusLabel="2 days"
          statusLabelStyle="label-success"
          onListValidEdit={handlesOnListValidEdit('1')}
        />
        <TodoListItem
          id="2"
          label="Fully Responsive & Bootstrap 3.0.2 Compatible"
          done={false}
          statusLabel="Done"
          statusLabelStyle="label-danger"
          onListValidEdit={handlesOnListValidEdit('2')}
        />
        <TodoListItem
          id="3"
          label="Latest Design Concept"
          done={false}
          statusLabel="Company"
          statusLabelStyle="label-warning"
          onListValidEdit={handlesOnListValidEdit('3')}
        />
        <TodoListItem
          id="4"
          label="Write well documentation for this theme"
          done={false}
          statusLabel="3 Days"
          statusLabelStyle="label-primary"
          onListValidEdit={handlesOnListValidEdit('4')}
        />
        <TodoListItem
          id="5"
          label="Don't bother to download this Dashbord"
          done={false}
          statusLabel="Now"
          statusLabelStyle="label-inverse"
          onListValidEdit={handlesOnListValidEdit('5')}
        />
        <TodoListItem
          id="6"
          label="Give feedback for the template"
          done={false}
          statusLabel="2 Days"
          statusLabelStyle="label-success"
          onListValidEdit={handlesOnListValidEdit('6')}
        />
        <TodoListItem
          id="7"
          label="Tell your friends about this admin template"
          done={false}
          statusLabel="Now"
          statusLabelStyle="label-danger"
          onListValidEdit={handlesOnListValidEdit('7')}
        />
      </TodoList>
      <TodoListCommands>
        <TodoListAddTask />
        <TodoListSeeAllTask />
      </TodoListCommands>
    </Panel>
  );
}

TodoListDemo.displayName = 'TodoListDemo';

export default TodoListDemo;
