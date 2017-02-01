import React, {
  PropTypes,
  Component
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';
import { AnimatedView } from '../../components/animatedView/AnimatedView';

class SimpleTables extends Component {
  componentWillMount() {
    const { actions: {  enterSimpleTables } } = this.props;
    enterSimpleTables();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: {  leaveSimpleTables } } = this.props;
    leaveSimpleTables();
  }

  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-md-6">
            <div className="panel">
              <header className="panel-heading">
                Bordered Table
              </header>
              <div className="panel-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>
                        #
                      </th>
                      <th>
                        Task
                      </th>
                      <th>
                        Progress
                      </th>
                      <th style={{width: '40px'}}>
                        Label
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-danger"
                            style={{width: '55%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-yellow"
                            style={{width: '70%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div
                            className="progress-bar progress-bar-primary"
                            style={{width: '30%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div
                            className="progress-bar progress-bar-success"
                            style={{width: '90%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-green">90%</span></td>
                    </tr>
                  </tbody>
                </table>
                <div className="table-foot">
                  <ul className="pagination pagination-sm no-margin pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&raquo;</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel">
              <header className="panel-heading">
                Condensed Full Width Table
              </header>
              <div className="panel-body no-padding">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-danger"
                            style={{width: '55%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div className="progress xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '70%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div className="progress-bar progress-bar-primary" style={{width: '30%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div className="progress-bar progress-bar-success" style={{width: '90%'}}></div>
                        </div>
                      </td>
                      <td><span className="badge bg-green">90%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <header className="panel-heading">
                Simple Full Width Table
              </header>
              <div className="panel-body">
                <div className="box-tools">
                  <ul className="pagination pagination-sm m-b-10 m-t-10 pull-right">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&raquo;</a></li>
                  </ul>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-danger"
                            style={{width: '55%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-yellow"
                            style={{width: '70%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div
                            className="progress-bar progress-bar-primary"
                            style={{width: '30%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div
                            className="progress-bar progress-bar-success"
                            style={{width: '90%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-green">90%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="panel">
              <header className="panel-heading">
                Striped Full Width Table
              </header>
              <div className="panel-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                        <th style={{width: '10px'}}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-danger"
                            style={{width: '55%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-yellow"
                            style={{width: '70%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div
                            className="progress-bar progress-bar-primary"
                            style={{width: '30%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div className="progress xs progress-striped active">
                          <div
                            className="progress-bar progress-bar-success"
                            style={{width: '90%'}}>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge bg-green">90%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="panel">
                <header className="panel-heading">
                  Responsive Hover Table
                </header>
                <div className="panel-body table-responsive">
                  <div className="box-tools m-b-15">
                    <div className="input-group">
                      <input
                        type="text"
                        name="table_search"
                        className="form-control input-sm pull-right"
                        style={{width: '150px'}}
                        placeholder="Search"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-default">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="label label-success">Approved</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>219</td>
                        <td>Jane Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="label label-warning">Pending</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>657</td>
                        <td>Bob Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="label label-primary">Approved</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="label label-danger">Denied</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </AnimatedView>
    );
  }
}

SimpleTables.propTypes= {
  actions: PropTypes.shape({
    enterSimpleTables: PropTypes.func,
    leaveSimpleTables: PropTypes.func
  })
};

export default SimpleTables;
