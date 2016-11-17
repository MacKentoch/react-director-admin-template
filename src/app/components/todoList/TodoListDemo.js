import React from 'react';
import TodoListItem from './todoListItem/TodoListItem';


const TodoListDemo = () => {
  return (
    <section className="panel tasks-widget">
      <header className="panel-heading">
          Todo list
      </header>
      <div className="panel-body">
        <div className="task-content">
          <ul className="task-list">
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
          </ul>
        </div>
       <div className=" add-task-row">
         <a className="btn btn-success btn-sm pull-left" href="#">Add New Tasks</a>
         <a className="btn btn-default btn-sm pull-right" href="#">See All Tasks</a>
       </div>
    </div>
  </section>
  );
};

export default TodoListDemo;
