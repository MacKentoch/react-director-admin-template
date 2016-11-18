import React from 'react';
import TodoList from './todoList/TodoList';
import TodoListItem from './todoListItem/TodoListItem';
import TodoListCommands from './todoListCommands/TodoListCommands';
import TodoListAddTask from './todoListCommands/TodoListAddTask';
import TodoListSeeAllTask from './todoListCommands/TodoListSeeAllTask';
import Panel from '../panel/Panel';


const TodoListDemo = () => {
  return (
    <Panel
      hasTitle={true}
      title={'Todo list'}
      sectionCustomClass="tasks-widget">
      <TodoList>
        <TodoListItem
          label="Director is Modern Dashboard"
          done={false}
          statusLabel="2 days"
          statusLabelStyle="label-success"
        />
        <TodoListItem
          label="Fully Responsive & Bootstrap 3.0.2 Compatible"
          done={false}
          statusLabel="Done"
          statusLabelStyle="label-danger"
        />
        <TodoListItem
          label="Latest Design Concept"
          done={false}
          statusLabel="Company"
          statusLabelStyle="label-warning"
        />
        <TodoListItem
          label="Write well documentation for this theme"
          done={false}
          statusLabel="3 Days"
          statusLabelStyle="label-primary"
        />
        <TodoListItem
          label="Don't bother to download this Dashbord"
          done={false}
          statusLabel="Now"
          statusLabelStyle="label-inverse"
        />
        <TodoListItem
          label="Give feedback for the template"
          done={false}
          statusLabel="2 Days"
          statusLabelStyle="label-success"
        />
        <TodoListItem
          label="Tell your friends about this admin template"
          done={false}
          statusLabel="Now"
          statusLabelStyle="label-danger"
        />
      </TodoList>
     <TodoListCommands>
       <TodoListAddTask />
       <TodoListSeeAllTask />
     </TodoListCommands>
   </Panel>
  );
};

export default TodoListDemo;
