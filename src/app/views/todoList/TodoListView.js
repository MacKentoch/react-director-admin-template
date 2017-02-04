import React, {
  PropTypes,
  Component
}                         from 'react';
import {
  AnimatedView,
  Panel,
  TodoList,
  TodoListItem,
  TodoListCommands,
  TodoListAddTask,
  TodoListSeeAllTask
}                         from '../../components';
import Highlight          from 'react-highlight';
import shallowCompare     from 'react-addons-shallow-compare';

class TodoListView extends Component {

  state = {
    todos: [
      {
        label: 'Director is Modern Dashboard',
        done: false,
        statusLabel: '2 days',
        statusLevel: 'label-success'
      },
      {
        label: 'Fully Responsive & Bootstrap 3.0.2 Compatible',
        done: false,
        statusLabel: 'done',
        statusLevel: 'label-danger'
      },
      {
        label: 'Latest Design Concept',
        done: false,
        statusLabel: 'Company',
        statusLevel: 'label-warning'
      },
      {
        label: 'Director is Modern Dashboard',
        done: false,
        statusLabel: '2 days',
        statusLevel: 'label-success'
      },
      {
        label: 'Director is Modern Dashboard',
        done: false,
        statusLabel: '2 days',
        statusLevel: 'label-success'
      },
      {
        label: 'Director is Modern Dashboard',
        done: false,
        statusLabel: '2 days',
        statusLevel: 'label-success'
      },
      {
        label: 'Director is Modern Dashboard',
        done: false,
        statusLabel: '2 days',
        statusLevel: 'label-success'
      }
    ]
  };

  componentWillMount() {
    const { actions: { enterTodoListView } } = this.props;
    enterTodoListView();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveTodoListView } } = this.props;
    leaveTodoListView();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { todos } = this.state;

    const source = `
      // import
      import {
        Panel,
        TodoList,
        TodoListItem,
        TodoListCommands,
        TodoListAddTask,
        TodoListSeeAllTask
      } from './_SOMEWHERE_/components';

      // todos (in state for example):
      state = {
        todos: [
          {
            label: 'Director is Modern Dashboard',
            done: false,
            statusLabel: '2 days',
            statusLevel: 'label-success'
          },
          {
            label: 'Fully Responsive & Bootstrap 3.0.2 Compatible',
            done: false,
            statusLabel: 'done',
            statusLevel: 'label-danger'
          },
          {
            label: 'Latest Design Concept',
            done: false,
            statusLabel: 'Company',
            statusLevel: 'label-warning'
          },
          {
            label: 'Director is Modern Dashboard',
            done: false,
            statusLabel: '2 days',
            statusLevel: 'label-success'
          },
          {
            label: 'Director is Modern Dashboard',
            done: false,
            statusLabel: '2 days',
            statusLevel: 'label-success'
          },
          {
            label: 'Director is Modern Dashboard',
            done: false,
            statusLabel: '2 days',
            statusLevel: 'label-success'
          },
          {
            label: 'Director is Modern Dashboard',
            done: false,
            statusLabel: '2 days',
            statusLevel: 'label-success'
          }
        ]
      };

      // in render():
      <Panel
        hasTitle={true}
        title={'Todo list'}
        sectionCustomClass="tasks-widget">
        <TodoList>
          {
            todos.map(
              ({label, done, statusLabel, statusLevel}, todoIdx) => {
                return (
                  <TodoListItem
                    key={todoIdx}
                    label={label}
                    done={done}
                    statusLabel={statusLabel}
                    statusLabelStyle={statusLevel}
                  />
                );
              }
            )
          }
        </TodoList>
       <TodoListCommands>
         <TodoListAddTask />
         <TodoListSeeAllTask />
       </TodoListCommands>
     </Panel>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <Panel
              hasTitle={true}
              title={'Todo list'}
              sectionCustomClass="tasks-widget">
              <TodoList>
                {
                  todos.map(
                    ({label, done, statusLabel, statusLevel}, todoIdx) => {
                      return (
                        <TodoListItem
                          key={todoIdx}
                          label={label}
                          done={done}
                          statusLabel={statusLabel}
                          statusLabelStyle={statusLevel}
                        />
                      );
                    }
                  )
                }
              </TodoList>
             <TodoListCommands>
               <TodoListAddTask />
               <TodoListSeeAllTask />
             </TodoListCommands>
           </Panel>
          </div>
        </div>
        {/* source: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Source"
              hasTitle={true}>
              <Highlight className="javascript">
                {source}
              </Highlight>
            </Panel>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

TodoListView.propTypes= {
  actions: PropTypes.shape({
    enterTodoListView: PropTypes.func.isRequired,
    leaveTodoListView: PropTypes.func.isRequired
  })
};

export default TodoListView;
