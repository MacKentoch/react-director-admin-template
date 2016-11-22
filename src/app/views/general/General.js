import React, {
  PropTypes,
  Component
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import {
  Panel,
  Breadcrumb,
  Stat,
  ProgressBar,
  ToolTip
}                     from '../../components';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip        from 'react-bootstrap/lib/Tooltip';

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);


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
            <Breadcrumb
              path={['Home', 'Dashboard', 'Current page']}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Stat
              statFaIconName="fa-file-o"
              statIconColor="#fa8564"
              statLabel="999 Projects"
            />
          </div>
          <div className="col-md-2">
            <Stat
              statFaIconName="fa-paperclip"
              statIconColor="#45cf95"
              statLabel="999 Documents"
            />
          </div>
          <div className="col-md-2">
            <Stat
              statFaIconName="fa-envelope-o"
              statIconColor="#AC75F0"
              statLabel="999 Messages"
            />
          </div>
          <div className="col-md-2">
            <Stat
              statFaIconName="fa-check-square-o"
              statIconColor="#45cf95"
              statLabel="1000 Tasks"
            />
          </div>
          <div className="col-md-2">
            <Stat
              statFaIconName="fa-dollar"
              statIconColor="#AC75F0"
              statLabel="$99999 Earnings"
            />
          </div>
          <div className="col-md-2">
            <Stat
              statFaIconName="fa-refresh"
              statIconColor="#fa8564"
              statIconSpin={true}
              statLabel="Processing...."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                {/* <!--progress bar start--> */}
                <Panel
                  title="Basic Progress Bars"
                  hasTitle={true}>
                  <p>
                    <code>
                      .progress
                    </code>
                  </p>
                  <ProgressBar
                    barSize="progress"
                    barStriped={true}
                    barStyle="primary"
                    active={false}
                    valueNow={40}
                    valueMin={0}
                    valueMax={100}
                    screenReadersText={`${40}% Complete (success)`}
                  />
                  <p>
                    Class:
                    <code>
                      .sm
                    </code>
                  </p>
                  <ProgressBar
                    barSize="sm"
                    barStriped={true}
                    barStyle="success"
                    active={true}
                    valueNow={20}
                    valueMin={0}
                    valueMax={100}
                    screenReadersText={`${20}% Complete`}
                  />
                  <p>
                    Class:
                    <code>
                      .xs
                    </code>
                  </p>
                  <ProgressBar
                    barSize="xs"
                    barStriped={true}
                    barStyle="warning"
                    active={false}
                    valueNow={60}
                    valueMin={0}
                    valueMax={100}
                    screenReadersText={`${60}% Complete (warning)`}
                  />
                  <p>
                    Class:
                    <code>
                      .xxs
                    </code>
                  </p>
                  <ProgressBar
                    barSize="xxs"
                    barStriped={true}
                    barStyle="danger"
                    active={false}
                    valueNow={60}
                    valueMin={0}
                    valueMax={100}
                    screenReadersText={`${60}% Complete (warning)`}
                  />
                </Panel>
              {/* <!--progress bar end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <!--progress bar start--> */}
              <Panel
                title="Striped Progress Bars"
                hasTitle={true}>
                <p>
                  <code>
                    .progress
                  </code>
                </p>
                <ProgressBar
                  barSize="progress"
                  barStriped={true}
                  barStyle="primary"
                  active={false}
                  valueNow={40}
                  valueMin={0}
                  valueMax={100}
                  screenReadersText={`${40}% Complete (success)`}
                />
                <p>
                  Class:
                  <code>
                    .sm
                  </code>
                </p>
                <ProgressBar
                  barSize="sm"
                  barStriped={true}
                  barStyle="success"
                  active={true}
                  valueNow={20}
                  valueMin={0}
                  valueMax={100}
                  screenReadersText={`${20}% Complete`}
                />
                <p>
                  Class:
                  <code>
                    .xs
                  </code>
                </p>
                <ProgressBar
                  barSize="xs"
                  barStriped={true}
                  barStyle="warning"
                  active={false}
                  valueNow={60}
                  valueMin={0}
                  valueMax={100}
                  screenReadersText={`${60}% Complete (warning)`}
                />
                <p>
                  Class:
                  <code>
                    .xxs
                  </code>
                </p>
                <ProgressBar
                  barSize="xxs"
                  barStriped={true}
                  barStyle="danger"
                  active={false}
                  valueNow={60}
                  valueMin={0}
                  valueMax={100}
                  screenReadersText={`${60}% Complete (warning)`}
                />
              </Panel>
              {/* <!--progress bar end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <!--tooltips start--> */}
              <Panel
                title="Tooltips"
                hasTitle={false}
                bodyCustomClass="btn-gap">

                <ToolTip
                  toolTipId={'tooltipTop'}
                  toolTipContent={<span>Tooltip on top</span>}
                  tooltipPlacement={'top'}>
                  <button
                    title=""
                    className="btn btn-default tooltips"
                    type="button">
                    Tooltip on top
                  </button>
                </ToolTip>

                <ToolTip
                  toolTipId={'tooltipLeft'}
                  toolTipContent={<span>Tooltip on left</span>}
                  tooltipPlacement={'left'}>
                  <button
                    title=""
                    className="btn btn-default tooltips"
                    type="button">
                    left
                  </button>
                </ToolTip>

                <ToolTip
                  toolTipId={'tooltipBottom'}
                  toolTipContent={<span>Tooltip on bottom</span>}
                  tooltipPlacement={'bottom'}>
                  <button
                    title=""
                    className="btn btn-default tooltips"
                    type="button">
                    bottom
                  </button>
                </ToolTip>

                <ToolTip
                  toolTipId={'tooltipRight'}
                  toolTipContent={<span>Tooltip on right</span>}
                  tooltipPlacement={'right'}>
                  <button
                    title=""
                    className="btn btn-default tooltips"
                    type="button">
                    right
                  </button>
                </ToolTip>

              </Panel>
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
                  <div className="text-center">
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
                  <div className="text-center">
                    <ul className="pagination pagination-sm">
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
                    <h3>Default Example</h3>
                    <nav>
                      <ul className="pager">
                        <li><a href="#">Previous</a></li>
                        <li><a href="#">Next</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div>
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
                  </div>
                </div>
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
