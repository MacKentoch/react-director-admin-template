/* eslint no-console:0 */
import React, {
  PropTypes,
  PureComponent
}                     from 'react';
import {
  AnimatedView,
  Panel,
  Breadcrumb,
  Stat,
  ProgressBar,
  ToolTip,
  Pagination,
  Pager,
  TabPanel,
  TabPanelHeader,
  TabPanelBody,
  TabPanelBodyContent,
  Alert,
  Button,
  Label
}                     from '../../components';

class General extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterGeneral: PropTypes.func,
      leaveGeneral: PropTypes.func
    })
  };

  componentWillMount() {
    this.props.actions.enterGeneral();
  }

  componentWillUnmount() {
    this.props.actions.leaveGeneral();
  }

  render() {
    return(
      <AnimatedView>
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
              <Panel
                title="Pagination"
                hasTitle={true}>
                <div className="text-center">
                  <Pagination
                    size="large"
                    numberOfPagination={5}
                  />
                </div>
                <div className="text-center">
                  <Pagination
                    numberOfPagination={5}
                  />
                </div>
                <div className="text-center">
                  <Pagination
                    size="small"
                    numberOfPagination={5}
                  />
                </div>
                <div>
                  <h3>Default Example</h3>
                  <Pager
                    aligned={false}
                    previous={'Previous'}
                    next={'Next'}
                  />
                </div>
                <div>
                  <h3>Aligned links</h3>
                  <Pager
                    aligned={true}
                    previous={
                      <div>
                        <span aria-hidden="true">
                          &larr;
                        </span>
                        Older
                      </div>
                    }
                    next={
                      <div>
                        Newer
                        <span aria-hidden="true">
                          &rarr;
                        </span>
                      </div>
                    }
                  />
                </div>
              </Panel>
            {/* <!--pagination end--> */}
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <TabPanel>
          <TabPanelHeader tabItems={
            [
              {name: 'Home', tablink: 'home1', isActive: true},
              {name: 'About', tablink: 'about1', isActive: false},
              {name: 'Profile', tablink: 'profile1', isActive: false}
            ]
          }/>
          <TabPanelBody>
            <TabPanelBodyContent id="home1">
              &nbsp;Home
            </TabPanelBodyContent>
            <TabPanelBodyContent id="about1">
              &nbsp;About
            </TabPanelBodyContent>
            <TabPanelBodyContent id="profile1">
              &nbsp;Profile
            </TabPanelBodyContent>
          </TabPanelBody>
        </TabPanel>

        <TabPanel>
          <TabPanelHeader tabItems={
            [
              {name: 'Home', tablink: 'home2', isActive: true},
              {name: 'About', tablink: 'about2', isActive: false},
              {name: 'Contact', tablink: 'contact2', isActive: false}
            ]
          }/>
          <TabPanelBody>
            <TabPanelBodyContent id="home2">
              <i className="fa fa-home"></i>
              &nbsp;Home
            </TabPanelBodyContent>
            <TabPanelBodyContent id="about2">
              <i className="fa fa-user"></i>
              &nbsp;About
            </TabPanelBodyContent>
            <TabPanelBodyContent id="contact2">
              <i className="fa fa-envelope-o"></i>
              &nbsp;Contact
            </TabPanelBodyContent>
          </TabPanelBody>
        </TabPanel>


        {/* <section className="panel general">
          <header className="panel-heading tab-bg-dark-navy-blue">
            <ul className="nav nav-tabs">
              <li>
                <a
                  data-toggle="tab"
                  href="#home-2">
                  <i className="fa fa-home"></i>
                  &nbsp;Home
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
        </section> */}
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
                <Panel
                  title="Alerts"
                  hasTitle={true}>
                  <Alert
                    type="danger">
                    <strong>
                      Oh snap!
                    </strong>
                    Change a few things up and try submitting again.
                  </Alert>

                  <Alert
                    type="success">
                    <strong>
                      Well done!
                    </strong>
                    You successfully read this important alert message.
                  </Alert>

                  <Alert
                    type="info">
                    <strong>
                      Heads up!
                    </strong>
                    This alert needs your attention, but it's not super important.
                  </Alert>

                  <Alert
                    type="warning">
                    <strong>
                      Warning!
                    </strong>
                    Best check yo self, you're not looking too good.
                  </Alert>
                </Panel>
              {/* <!--notification end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Panel
                title="Default Buttons"
                hasTitle={true}>
                <Button
                  type="default"
                  onClick={ () => console.log('it should handle onClick callback') }>
                  Default
                </Button>
                <Button
                  type="primary"
                  onClick={ () => console.log('it should handle onClick callback') }>
                  Primary
                </Button>
                <Button
                  type="success"
                  onClick={ () => console.log('it should handle onClick callback') }>
                  Success
                </Button>
                <Button
                  type="info"
                  onClick={ () => console.log('it should handle onClick callback') }>
                  Info
                </Button>
                <Button
                  type="warning"
                  onClick={ () => console.log('it should handle onClick callback') }>
                  Warning
                </Button>
                <Button
                  type="danger"
                  onClick={ () => console.log('it should handle onClick callback') }>
                  Danger
                </Button>

                <p className="text-muted text-center">
                  Labels
                </p>
                <p className="text-center">
                  <Label
                    type="default"
                    text="label"
                  />
                  <Label
                    type="primary"
                    text="Primary"
                  />
                  <Label
                    type="success"
                    text="Success"
                  />
                  <Label
                    type="info"
                    text="Info"
                  />
                  <Label
                    type="inverse"
                    text="Inverse"
                  />
                  <Label
                    type="warning"
                    text="Warning"
                  />
                  <Label
                    type="danger"
                    text="Danger"
                  />
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
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </AnimatedView>
    );
  }
}

export default General;
