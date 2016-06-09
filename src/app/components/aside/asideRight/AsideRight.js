'use strict';

import React from 'react';
import TodoList from '../../todoList/TodoList';
import TeamMates from '../../teamMates/TeamMates';


const AsideRight = () => {
  return (
    <aside className="right-side">

      {/* <!-- Main content --> */}
        <section className="content">
          <div className="row" style="margin-bottom:5px;">
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-red"><i className="fa fa-check-square-o"></i></span>
                    <div className="sm-st-info">
                        <span>3200</span>
                        Total Tasks
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-violet"><i className="fa fa-envelope-o"></i></span>
                    <div className="sm-st-info">
                        <span>2200</span>
                        Total Messages
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-blue"><i className="fa fa-dollar"></i></span>
                    <div className="sm-st-info">
                        <span>100,320</span>
                        Total Profit
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-green"><i className="fa fa-paperclip"></i></span>
                    <div className="sm-st-info">
                        <span>4567</span>
                        Total Documents
                    </div>
                </div>
            </div>
          </div>

          {/* <!-- Main row --> */}
          <div className="row">
            <div className="col-md-8">
              {/* <!--earning graph start--> */}
              <section className="panel">
                <header className="panel-heading">
                    Earning Graph
                </header>
                <div className="panel-body">
                    <canvas id="linechart" width="600" height="330"></canvas>
                </div>
              </section>
              {/* <!--earning graph end--> */}
            </div>

            <div className="col-lg-4">
              {/* <!--chat start--> */}
              <section className="panel">
                <header className="panel-heading">
                    Notifications
                </header>
                <div className="panel-body" id="noti-box">

                  <div className="alert alert-block alert-danger">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Oh snap!</strong> Change a few things up and try submitting again.
                  </div>
                  <div className="alert alert-success">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Well done!</strong> You successfully read this important alert message.
                  </div>
                  <div className="alert alert-info">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                  </div>
                  <div className="alert alert-warning">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Warning!</strong> Best check yo self, you're not looking too good.
                  </div>
                  <div className="alert alert-block alert-danger">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Oh snap!</strong> Change a few things up and try submitting again.
                  </div>
                  <div className="alert alert-success">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Well done!</strong> You successfully read this important alert message.
                  </div>
                  <div className="alert alert-info">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                  </div>
                  <div className="alert alert-warning">
                      <button data-dismiss="alert" className="close close-sm" type="button">
                          <i className="fa fa-times"></i>
                      </button>
                      <strong>Warning!</strong> Best check yo self, you're not looking too good.
                  </div>
              </div>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <section className="panel">
              <header className="panel-heading">
                Work Progress
              </header>
              <div className="panel-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project</th>
                      <th>Manager</th>
                      {/* <!-- <th>Client</th> --> */}
                      <th>Deadline</th>
                      {/* <!-- <th>Price</th> --> */}
                      <th>Status</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Facebook</td>
                    <td>Mark</td>
                    {/* <!-- <td>Steve</td> --> */}
                    <td>10/10/2014</td>
                    {/* <!-- <td>$1500</td> --> */}
                    <td><span className="label label-danger">in progress</span></td>
                    <td><span className="badge badge-info">50%</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Twitter</td>
                    <td>Evan</td>
                    {/*<!-- <td>Darren</td> -->*/}
                    <td>10/8/2014</td>
                    {/*<!-- <td>$1500</td> -->*/}
                    <td><span className="label label-success">completed</span></td>
                    <td><span className="badge badge-success">100%</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Google</td>
                    <td>Larry</td>
                    {/*<!-- <td>Nick</td> -->*/}
                    <td>10/12/2014</td>
                    {/*<!-- <td>$2000</td> -->*/}
                    <td><span className="label label-warning">in progress</span></td>
                    <td><span className="badge badge-warning">75%</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>LinkedIn</td>
                    <td>Allen</td>
                    {/*<!-- <td>Rock</td> -->*/}
                    <td>10/01/2015</td>
                    {/*<!-- <td>$2000</td> -->*/}
                    <td><span className="label label-info">in progress</span></td>
                    <td><span className="badge badge-info">65%</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tumblr</td>
                    <td>David</td>
                    {/*<!-- <td>HHH</td> -->*/}
                    <td>01/11/2014</td>
                    {/*<!-- <td>$2000</td> -->*/}
                    <td><span className="label label-warning">in progress</span></td>
                    <td><span className="badge badge-danger">95%</span></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Tesla</td>
                    <td>Musk</td>
                    {/*<!-- <td>HHH</td> -->*/}
                    <td>01/11/2014</td>
                    {/*<!-- <td>$2000</td> -->*/}
                    <td><span className="label label-info">in progress</span></td>
                    <td><span className="badge badge-success">95%</span></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Ghost</td>
                    <td>XXX</td>
                    {/*<!-- <td>HHH</td> -->*/}
                    <td>01/11/2014</td>
                    {/*<!-- <td>$2000</td> -->*/}
                    <td><span className="label label-info">in progress</span></td>
                    <td><span className="badge badge-success">95%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        {/* <!--end col-6 --> */}
        <div className="col-md-4">
        <section className="panel">
          <header className="panel-heading">
              Twitter Feed
          </header>
            <div className="panel-body">
              <div className="twt-area">
                <form action="#" method="post">
                    <textarea className="form-control" name="profile-tweet" placeholder="Share something on Twitter.." rows="3"></textarea>

                    <div className="clearfix">
                        <button className="btn btn-sm btn-primary pull-right" type="submit">
                            <i className="fa fa-twitter"></i>
                            Tweet
                        </button>
                        <a className="btn btn-link btn-icon fa fa-location-arrow" data-original-title="Add Location" data-placement="bottom" data-toggle="tooltip" href=
                        "#" style="text-decoration:none;" title=""></a>
                        <a className="btn btn-link btn-icon fa fa-camera" data-original-title="Add Photo" data-placement="bottom" data-toggle="tooltip" href="#"
                        style="text-decoration:none;" title=""></a>
                    </div>
                </form>
              </div>
              <ul className="media-list">
                    <li className="media">
                        <a href="#" className="pull-left">
                            <img src="img/26115.jpg" alt="Avatar" className="img-circle" width="64" height="64" />
                        </a>
                        <div className="media-body">
                            <span className="text-muted pull-right">
                                <small><em>30 min ago</em></small>
                            </span>
                            <a href="page_ready_user_profile.php">
                                <strong>John Doe</strong>
                            </a>
                            <p>
                                In hac <a href="#">habitasse</a> platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
                                <a href="#" className="text-danger">
                                    <strong>#dev</strong>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li className="media">
                        <a href="#" className="pull-left">
                            <img src="img/26115.jpg" alt="Avatar" className="img-circle" width="64" height="64"/>
                        </a>
                        <div className="media-body">
                            <span className="text-muted pull-right">
                                <small><em>30 min ago</em></small>
                            </span>
                            <a href="page_ready_user_profile.php">
                                <strong>John Doe</strong>
                            </a>
                            <p>
                                In hac <a href="#">habitasse</a> platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
                                <a href="#" className="text-danger">
                                    <strong>#design</strong>
                                </a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
      </div>
    </div>

        <div className="row">
          <div className="col-md-5">
            <TeamMates />
          </div>
          <div className="col-md-7">
            <TodoList />
        </div>

      </div>
    {/* <!-- row end --> */}
    </section>
    {/* <!-- /.content --> */}
    <div className="footer-main">
      react Director Admin Template
    </div>
  </aside>

  );
};

export default AsideRight;
