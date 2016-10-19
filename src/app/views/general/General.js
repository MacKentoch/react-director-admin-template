import React, {
  PropTypes,
  Component
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';


class General extends Component {

  state = {
    animated: true,
    viewEnters: false
  };

  componentWillMount() {
    this.props.actions.enterGeneral();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      ()=>this.setState({viewEnters: true}),
      500
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    this.props.actions.leaveGeneral();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    return(
      <section className={
        cx({
          'content':        true,
          'animatedViews':  this.state.animated,
          'invisible':      !this.state.viewEnters,
          'view-enter':     this.state.viewEnters
        })}>
        <div className="row">
          <div className="col-md-12">
            {/* <!--breadcrumbs start --> */}
            <ul className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-home"></i>
                    Home
                </a>
              </li>
              <li>
                <a href="#">
                  Dashboard
                </a>
              </li>
              <li className="active">
                Current page
              </li>
            </ul>
            {/* <!--breadcrumbs end --> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="stat">
              <div
                className="stat-icon"
                style={{color: '#fa8564'}}>
                <i className="fa fa-file-o fa-3x stat-elem"></i>
              </div>
              <h5 className="stat-info">
                999 Projects
              </h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="stat">
              <div
                className="stat-icon"
                style={{color:'#45cf95'}}>
                <i className="fa fa-paperclip fa-3x stat-elem"></i>
              </div>
              <h5 className="stat-info">
                999 Documents
              </h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="stat">
              <div
                className="stat-icon"
                style={{color:'#AC75F0'}}>
                <i className="fa fa-envelope-o fa-3x stat-elem"></i>
              </div>
              <h5 className="stat-info">
                999 Messages
              </h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="stat">
              <div
                className="stat-icon"
                style={{color: '#45cf95'}}>
                <i className="fa fa-check-square-o fa-3x stat-elem"></i>
              </div>
              <h5 className="stat-info">
                1000 Tasks
              </h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="stat">
              <div
                className="stat-icon" style={{color:'#AC75F0'}}>
                <i className="fa fa-dollar fa-3x stat-elem"></i>
              </div>
              <h5 className="stat-info">
                $99999 Earnings
              </h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="stat">
              <div
                className="stat-icon"
                style={{color:'#fa8564'}}>
                <i className="fa fa-refresh fa-spin fa-3x stat-elem"></i>
              </div>
              <h5 className="stat-info">
                Procesing....
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                {/* <!--progress bar start--> */}
                <section className="panel">
                  <header className="panel-heading">
                    Basic Progress Bars
                  </header>
                  <div className="panel-body">
                    <p>
                      <code>
                        .progress
                      </code>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: '40%'}}>
                        <span className="sr-only">
                          40% Complete (success)
                        </span>
                      </div>
                    </div>
                    <p>
                      Class:
                      <code>
                        .sm
                      </code>
                    </p>
                    <div className="progress progress-sm active">
                      <div
                        className="progress-bar progress-bar-success progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: '20%'}}>
                        <span className="sr-only">
                          20% Complete
                        </span>
                      </div>
                    </div>
                    <p>
                      Class:
                      <code>
                        .xs
                      </code>
                    </p>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar progress-bar-warning progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: '60%'}}>
                        <span className="sr-only">
                          60% Complete (warning)
                        </span>
                      </div>
                    </div>
                    <p>Class: <code>.xxs</code></p>
                    <div className="progress progress-xxs">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: '60%'}}>
                        <span className="sr-only">
                          60% Complete (warning)
                        </span>
                      </div>
                    </div>
                  </div>
              </section>
              {/* <!--progress bar end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <!--progress bar start--> */}
              <section className="panel">
                <header className="panel-heading">
                  Striped Progress Bars
                </header>
                <div className="panel-body">
                  <p>
                    <code>
                      .progress
                    </code>
                  </p>
                  <div className="progress progress-striped">
                    <div
                      className="progress-bar progress-bar-primary progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '40%'}}>
                      <span className="sr-only">
                        40% Complete (success)
                      </span>
                    </div>
                  </div>
                  <p>Class: <code>.sm</code></p>
                  <div className="progress progress-striped progress-sm active">
                    <div
                      className="progress-bar progress-bar-success progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '20%'}}>
                      <span className="sr-only">
                        20% Complete
                      </span>
                    </div>
                  </div>
                  <p>
                    Class:
                    <code>
                      .xs
                    </code>
                  </p>
                  <div className="progress progress-striped progress-xs">
                    <div
                      className="progress-bar progress-bar-warning progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '60%'}}>
                      <span className="sr-only">
                        60% Complete (warning)
                      </span>
                    </div>
                  </div>
                  <p>
                    Class:
                    <code>
                      .xxs
                    </code>
                  </p>
                  <div className="progress progress-striped progress-xxs">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '60%'}}>
                      <span className="sr-only">
                        60% Complete (warning)
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!--progress bar end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <!--tooltips start--> */}
              <section className="panel">
                <div className="panel-body btn-gap">
                  <button
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="btn btn-default tooltips"
                    type="button" data-original-title="Tooltip on top">
                    Tooltip on top
                  </button>
                  <button
                    title=""
                    data-placement="left"
                    data-toggle="tooltip"
                    className="btn btn-default tooltips"
                    type="button"
                    data-original-title="Tooltip on left">
                    left
                  </button>
                  <button
                    title=""
                    data-placement="bottom"
                    data-toggle="tooltip "
                    className="btn btn-default tooltips"
                    type="button"
                    data-original-title="Tooltip on bottom">
                    bottom
                  </button>
                  <button
                    title=""
                    data-placement="right"
                    data-toggle="tooltip"
                    className="btn btn-default tooltips"
                    type="button"
                    data-original-title="Tooltip on right">
                    right
                  </button>
                </div>
              </section>
              {/* <!--tooltips end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <!--pagination start--> */}
              <section className="panel">
                <header className="panel-heading">
                  Pagination
                </header>
                <div className="panel-body">
                  <div>
                    <ul className="pagination pagination-lg">
                      <li><a href="#">«</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">»</a></li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <ul className="pagination">
                      <li><a href="#">«</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">»</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-sm pull-right">
                      <li><a href="#">«</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
                <h3>Default Example</h3>
                <nav>
                  <ul className="pager">
                    <li><a href="#">Previous</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </nav>
                <h3>Aligned links</h3>
                <nav>
                  <ul className="pager">
                    <li className="previous">
                      <a href="#">
                        <span aria-hidden="true">
                          &larr;
                        </span>
                        Older
                      </a>
                    </li>
                    <li className="next">
                      <a href="#">
                        Newer
                        <span aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </section>
            {/* <!--pagination end--> */}
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        {/* <!--tab nav start--> */}
        <section className="panel general">
          <header className="panel-heading tab-bg-dark-navy-blue">
            <ul className="nav nav-tabs">
              <li className="active">
                <a
                  data-toggle="tab"
                  href="#home">
                  &nbsp;Home
                </a>
              </li>
              <li className="">
                <a
                  data-toggle="tab"
                  href="#about">
                  &nbsp;About
                </a>
              </li>
              <li className="">
                <a
                  data-toggle="tab"
                  href="#profile">
                  &nbsp;Profile
                </a>
              </li>
              <li className="">
                <a
                  data-toggle="tab"
                  href="#contact">
                  &nbsp;Contact
                </a>
              </li>
            </ul>
          </header>
          <div className="panel-body">
            <div className="tab-content">
              <div
                id="home"
                className="tab-pane active">
                &nbsp;Home
              </div>
              <div
                id="about"
                className="tab-pane">
                &nbsp;About
              </div>
              <div
                id="profile"
                className="tab-pane">
                &nbsp;Profile
              </div>
              <div
                id="contact"
                className="tab-pane">
                &nbsp;Contact
              </div>
            </div>
          </div>
        </section>
        {/* <!--tab nav start--> */}
        {/* <!--tab nav start--> */}
        <section className="panel general">
          <header className="panel-heading tab-bg-dark-navy-blue">
            <ul className="nav nav-tabs">
              <li>
                <a
                  data-toggle="tab"
                  href="#home-2">
                  <i className="fa fa-home"></i>
                </a>
              </li>
              <li className="active">
                <a
                  data-toggle="tab"
                  href="#about-2">
                  <i className="fa fa-user"></i>
                  &nbsp;About
                </a>
              </li>
              <li className="">
                <a
                  data-toggle="tab"
                  href="#contact-2">
                  <i className="fa fa-envelope-o"></i>
                  &nbsp;Contact
                </a>
              </li>
            </ul>
          </header>
          <div className="panel-body">
            <div className="tab-content">
              <div
                id="home-2"
                className="tab-pane ">
                &nbsp;Home
              </div>
              <div
                id="about-2"
                className="tab-pane active">
                &nbsp;About
              </div>
              <div
                id="contact-2"
                className="tab-pane ">
                &nbsp;Contact
              </div>
            </div>
          </div>
        </section>
        {/* <!--tab nav end--> */}
        {/* <!--tab nav start--> */}
        <section className="panel">
          <header className="panel-heading tab-bg-dark-navy-blue tab-right ">
            <ul className="nav nav-tabs pull-right">
              <li className="active">
                <a
                  data-toggle="tab"
                  href="#home-3">
                  <i className="fa fa-home"></i>
                </a>
              </li>
                <li className="">
                  <a
                    data-toggle="tab"
                    href="#about-3">
                    <i className="fa fa-user"></i>
                    &nbsp;About
                  </a>
                </li>
                <li className="">
                  <a
                    data-toggle="tab"
                    href="#contact-3">
                    <i className="fa fa-envelope-o"></i>
                    &nbsp;Contact
                  </a>
                </li>
              </ul>
            </header>
            <div className="panel-body">
              <div className="tab-content">
                <div
                  id="home-3"
                  className="tab-pane active">
                  &nbsp;Home
                </div>
                <div
                  id="about-3"
                  className="tab-pane">
                  &nbsp;About
                </div>
                <div
                  id="contact-3"
                  className="tab-pane">
                  &nbsp;Contact
                </div>
              </div>
            </div>
          </section>
          {/* <!--tab nav end--> */}
          <div className="row">
            <div className="col-md-12">
              {/* <!--notification start--> */}
              <section className="panel">
                <div className="panel-body">
                  <div className="alert alert-block alert-danger ">
                    <button
                      data-dismiss="alert"
                      className="close close-sm"
                      type="button">
                      <i className="fa fa-times"></i>
                    </button>
                    <strong>
                      Oh snap!
                    </strong>
                    Change a few things up and try submitting again.
                  </div>
                  <div className="alert alert-success ">
                    <button
                      data-dismiss="alert"
                      className="close close-sm"
                      type="button">
                      <i className="fa fa-times"></i>
                    </button>
                    <strong>
                      Well done!
                    </strong>
                    You successfully read this important alert message.
                  </div>
                  <div className="alert alert-info ">
                    <button
                      data-dismiss="alert"
                      className="close close-sm"
                      type="button">
                      <i className="fa fa-times"></i>
                    </button>
                    <strong>
                      Heads up!
                    </strong>
                    This alert needs your attention, but it's not super important.
                  </div>
                  <div className="alert alert-warning ">
                    <button data-dismiss="alert" className="close close-sm" type="button">
                      <i className="fa fa-times"></i>
                    </button>
                    <strong>
                      Warning!
                    </strong>
                    Best check yo self, you're not looking too good.
                  </div>
                </div>
              </section>
              {/* <!--notification end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <section className="panel">
                <header className="panel-heading">
                  Default Buttons
                </header>
                <div className="panel-body">
                  <button
                    type="button"
                    className="btn btn-default">
                    Default
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary">
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-success">
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-info">
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning">
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger">
                    Danger
                  </button>
                  <p className="text-muted text-center">
                    Labels
                  </p>
                  <p className="text-center">
                    <span className="label label-default">
                      label
                    </span>
                    <span className="label label-primary">
                      Primary
                    </span>
                    <span className="label label-success">
                      Success
                    </span>
                    <span className="label label-info">
                      Info
                    </span>
                    <span className="label label-inverse">
                      Inverse
                    </span>
                    <span className="label label-warning">
                      Warning
                    </span>
                    <span className="label label-danger">
                      Danger
                    </span>
                  </p>
                  <p className="text-muted text-center">
                    Badges
                  </p>
                  <p className="m-bot-none text-center">
                    <span className="badge"
                      >5
                    </span>
                    <span className="badge badge-primary">
                      10
                    </span>
                    <span className="badge badge-success">
                      15
                    </span>
                    <span className="badge badge-info">
                      20
                    </span>
                    <span className="badge badge-inverse">
                      25
                    </span>
                    <span className="badge badge-warning">
                      30
                    </span>
                    <span className="badge badge-danger">
                      35
                    </span>
                  </p>
                  <h3>
                    Modals
                  </h3>
                  <a
                    className="btn btn-success"
                    data-toggle="modal"
                    href="#myModalGeneral">
                    Dialog
                  </a>
                  <a
                    className="btn btn-warning"
                    data-toggle="modal"
                    href="#myModalGeneral2">
                    Confirm
                  </a>
                  <a
                    className="btn btn-danger"
                    data-toggle="modal"
                    href="#myModalGeneral3">
                    Alert !
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

    );
  }
}

General.propTypes= {
  actions: PropTypes.shape({
    enterGeneral: PropTypes.func,
    leaveGeneral: PropTypes.func
  })
};

export default General;
