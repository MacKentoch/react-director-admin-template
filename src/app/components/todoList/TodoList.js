import React from 'react';
import TodoListItem from './todoListItem/TodoListItem';


const TodoList = () => {
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
              />
              <li>
                <div className="task-checkbox">
                  {/* <!-- <input type="checkbox" className="list-child" value=""  /> --> */}
                  <input type="checkbox" className="flat-grey"/>
                </div>
                <div className="task-title">
                  <span className="task-title-sp">Fully Responsive & Bootstrap 3.0.2 Compatible</span>
                  <span className="label label-danger">Done</span>
                  <div className="pull-right hidden-phone">
                    <button className="btn btn-default btn-xs"><i className="fa fa-check"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-times"></i></button>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-checkbox">
                    {/* <!-- <input type="checkbox" className="list-child" value=""  /> --> */}
                    <input type="checkbox" className="flat-grey"/>
                </div>
                <div className="task-title">
                  <span className="task-title-sp">Latest Design Concept</span>
                  <span className="label label-warning">Company</span>
                  <div className="pull-right hidden-phone">
                    <button className="btn btn-default btn-xs"><i className="fa fa-check"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-times"></i></button>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-checkbox">
                    {/* <!-- <input type="checkbox" className="list-child" value=""  /> --> */}
                    <input type="checkbox" className="flat-grey"/>
                </div>
                <div className="task-title">
                  <span className="task-title-sp">Write well documentation for this theme</span>
                  <span className="label label-primary">3 Days</span>
                  <div className="pull-right hidden-phone">
                    <button className="btn btn-default btn-xs"><i className="fa fa-check"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-times"></i></button>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-checkbox">
                    {/* <!-- <input type="checkbox" className="list-child" value=""  /> --> */}
                    <input type="checkbox" className="flat-grey"/>
                </div>
                <div className="task-title">
                  <span className="task-title-sp">Don't bother to download this Dashbord</span>
                  <span className="label label-inverse">Now</span>
                  <div className="pull-right">
                    <button className="btn btn-default btn-xs"><i className="fa fa-check"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-times"></i></button>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-checkbox">
                    {/* <!-- <input type="checkbox" className="list-child" value=""  /> --> */}
                    <input type="checkbox" className="flat-grey"/>
                </div>
                <div className="task-title">
                  <span className="task-title-sp">Give feedback for the template</span>
                  <span className="label label-success">2 Days</span>
                  <div className="pull-right hidden-phone">
                    <button className="btn btn-default btn-xs"><i className="fa fa-check"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-times"></i></button>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-checkbox">
                  {/* <!-- <input type="checkbox" className="list-child" value=""  /> --> */}
                  <input type="checkbox" className="flat-grey"/>
                </div>
                <div className="task-title">
                  <span className="task-title-sp">Tell your friends about this admin template</span>
                  <span className="label label-danger">Now</span>
                  <div className="pull-right hidden-phone">
                    <button className="btn btn-default btn-xs"><i className="fa fa-check"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-default btn-xs"><i className="fa fa-times"></i></button>
                  </div>
              </div>
            </li>
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

export default TodoList;
