// @flow

import React, {
  PropTypes,
  PureComponent
}                     from 'react';
import {
  AnimatedView,
  BasicForms
}                     from '../../components';

class BasicElements extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterBasicElements: PropTypes.func,
      leaveBasicElements: PropTypes.func
    })
  };

  componentWillMount() {
    const { actions: { enterBasicElements } } = this.props;
    enterBasicElements();
  }

  componentWillUnmount() {
    const { actions: { leaveBasicElements } } = this.props;
    leaveBasicElements();
  }

  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-lg-6">
            <BasicForms />
          </div>

          <div className="col-lg-6">
            <section className="panel">
              <header className="panel-heading">
                Horizontal Forms
              </header>
              <div className="panel-body">
                <form
                  className="form-horizontal"
                  role="form">
                  <div className="form-group">
                    <label
                      htmlFor="inputEmail1"
                      className="col-lg-2 col-sm-2 control-label">
                      Email
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail1"
                        placeholder="Email"
                      />
                      <p className="help-block">
                        Example block-level help text here.
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="inputPassword1"
                      className="col-lg-2 col-sm-2 control-label">
                      Password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword1"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" />
                           Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <button type="submit" className="btn btn-danger">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section className="panel">
              <div className="panel-body">
                <a
                  href="#myModalBasicElements"
                  data-toggle="modal"
                  className="btn btn-xs btn-success">
                  Form in Modal
                </a>
                <a
                  href="#myModalBasicElements-1"
                  data-toggle="modal"
                  className="btn btn-xs btn-warning">
                  Form in Modal 2
                </a>
                <a
                  href="#myModalBasicElements-2"
                  data-toggle="modal"
                  className="btn btn-xs btn-danger">
                  Form in Modal 3
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="panel">
              <header className="panel-heading">
                Inline form
              </header>
              <div className="panel-body">
                <form
                  className="form-inline"
                  role="form">
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="exampleInputEmail2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="exampleInputPassword2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                       Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success">
                    Sign in
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="panel">
              <header className="panel-heading">
                Form Elements
              </header>
              <div className="panel-body">
                <form
                  className="form-horizontal tasi-form"
                  method="get">
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Default
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Help text
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                      />
                      <span className="help-block">
                        A block of help text that breaks onto a new line and may extend beyond one line.
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Rounder
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control round-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Input focus
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        id="focusedInput"
                        type="text"
                        value="This is focused..."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Disabled
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        id="disabledInput"
                        type="text"
                        placeholder="Disabled input here..."
                        disabled=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Placeholder
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="placeholder"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 col-sm-2 control-label">
                      Static control
                    </label>
                    <div className="col-lg-10">
                      <p className="form-control-static">
                        email@example.com
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section className="panel">
              <header className="panel-heading">
                Form Elements
              </header>
              <div className="panel-body">
                <form
                  className="form-horizontal tasi-form"
                  method="get">
                  <div className="form-group has-success">
                    <label
                      className="col-sm-2 control-label col-lg-2"
                      htmlFor="inputSuccess">
                      Input with success
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputSuccess"
                      />
                    </div>
                  </div>
                  <div className="form-group has-warning">
                    <label
                      className="col-sm-2 control-label col-lg-2"
                      htmlFor="inputWarning">
                      Input with warning
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputWarning"
                      />
                    </div>
                  </div>
                  <div className="form-group has-error">
                    <label
                      className="col-sm-2 control-label col-lg-2"
                      htmlFor="inputError">
                      Input with error
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputError"
                      />
                    </div>
                  </div>
                </form>
              </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
              Control sizing
            </header>
            <div className="panel-body">
              <form
                className="form-horizontal tasi-form"
                method="get">
                <div className="form-group">
                  <label
                    className="col-sm-2 control-label col-lg-2"
                    htmlFor="inputSuccess">
                    Control sizing
                  </label>
                  <div className="col-lg-10">
                    <input
                      className="form-control input-lg m-b-10"
                      type="text"
                      placeholder=".input-lg"
                    />
                    <input
                      className="form-control m-b-10"
                      type="text"
                      placeholder="Default input"
                    />
                    <input
                      className="form-control input-sm m-b-10"
                      type="text"
                      placeholder=".input-sm"
                    />
                    <select className="form-control input-lg m-b-10">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <select className="form-control m-b-10">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <select className="form-control input-sm m-b-10">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
               Form Elements
            </header>
            <div className="panel-body">
              <form
                className="form-horizontal tasi-form"
                method="get">
                <div className="form-group">
                  <label
                    className="col-sm-2 control-label col-lg-2"
                    htmlFor="inputSuccess">
                    Checkboxes and radios
                  </label>
                  <div className="col-lg-10">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          value=""
                        />
                        Option one is this and that—be sure to include why it's great
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          value=""
                        />
                        Option one is this and that—be sure to include why it's great option one
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios1"
                          value="option1"
                          checked=""
                        />
                        Option one is this and that—be sure to include why it's great
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios2"
                          value="option2"
                        />
                        Option two can be something else and selecting it will deselect option one
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-sm-2 control-label col-lg-2"
                    htmlFor="inputSuccess">
                    Inline checkboxes
                  </label>
                  <div className="col-lg-10">
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      1
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      2
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option3"
                      />
                      3
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-sm-2 control-label col-lg-2"
                    htmlFor="inputSuccess">
                    Selects
                  </label>
                  <div className="col-lg-10">
                    <select className="form-control m-b-10">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <select multiple="" className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-sm-2 control-label col-lg-2"
                    htmlFor="inputSuccess">
                    Column sizing
                  </label>
                  <div className="col-lg-10">
                    <div className="row">
                      <div className="col-lg-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-lg-2"
                        />
                      </div>
                      <div className="col-lg-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-lg-3"
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-lg-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
              Input groups
            </header>
            <div className="panel-body">
              <form
                className="form-horizontal tasi-form"
                method="get">
                <div className="form-group">
                  <label className="col-sm-2 control-label col-lg-2">
                    Basic examples
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group m-b-10">
                      <span className="input-group-addon">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group m-b-10">
                      <input
                        type="text"
                        className="form-control"
                      />
                      <span className="input-group-addon">
                        .00
                      </span>
                    </div>
                    <div className="input-group m-b-10">
                      <span className="input-group-addon">
                        $
                      </span>
                      <input
                        type="text"
                        className="form-control"
                      />
                      <span className="input-group-addon">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label col-lg-2">
                    Sizing
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group input-group-lg m-b-10">
                      <span className="input-group-addon">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control input-lg"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group m-b-10">
                      <span className="input-group-addon">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group input-group-sm m-b-10">
                      <span className="input-group-addon">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label col-lg-2">
                    Checkboxe and radio
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group m-b-10">
                      <span className="input-group-addon">
                        <input type="checkbox" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="input-group m-b-10">
                      <span className="input-group-addon">
                        <input type="radio" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label col-lg-2">
                    Button addons
                  </label>
                    <div className="col-lg-10">
                      <div className="input-group m-b-10">
                        <span className="input-group-btn">
                          <button
                            className="btn btn-white"
                            type="button">
                            Go!
                          </button>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group m-b-10">
                        <input
                          type="text"
                          className="form-control"
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-white"
                            type="button">
                            Go!
                          </button>
                        </span>
                      </div>
                      <div className="input-group m-b-10">
                        <div className="input-group-btn">
                          <button
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-toggle="dropdown">
                            Action
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Something else here
                              </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a href="#">
                                Separated link
                              </a>
                            </li>
                          </ul>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group m-b-10">
                        <input
                          type="text"
                          className="form-control"
                        />
                        <div className="input-group-btn">
                          <button
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-toggle="dropdown">
                            Action
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu pull-right">
                            <li>
                              <a href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Something else here
                              </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a href="#">
                                Separated link
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label col-lg-2">
                      Segmented buttons
                    </label>
                    <div className="col-lg-10">
                      <div className="input-group m-b-10">
                        <div className="input-group-btn">
                          <button
                            tabIndex="-1"
                            className="btn btn-white"
                            type="button">
                            Action
                          </button>
                          <button
                            tabIndex="-1"
                            data-toggle="dropdown"
                            className="btn btn-white dropdown-toggle"
                            type="button">
                            <span className="caret"></span>
                          </button>
                          <ul
                            role="menu"
                            className="dropdown-menu">
                            <li>
                              <a href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Something else here
                              </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a href="#">
                                Separated link
                              </a>
                            </li>
                          </ul>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group m-b-10">
                        <input
                          type="text"
                          className="form-control"
                        />
                        <div className="input-group-btn">
                          <button
                            tabIndex="-1"
                            className="btn btn-white"
                            type="button">
                            Action
                          </button>
                          <button
                            tabIndex="-1"
                            data-toggle="dropdown"
                            className="btn btn-white dropdown-toggle"
                            type="button">
                            <span className="caret"></span>
                          </button>
                          <ul
                            role="menu"
                            className="dropdown-menu pull-right">
                            <li>
                              <a href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Something else here
                              </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a href="#">
                                Separated link
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section className="panel">
              <header className="panel-heading">
                Inline Grid
              </header>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="text" placeholder=".col-md-12" className="form-control" />
                  </div>

                  <div className="col-md-6 form-group">
                    <input type="text" placeholder=".col-md-6" className="form-control" />
                  </div>

                  <div className="col-md-6 form-group">
                    <input type="text" placeholder=".col-md-6" className="form-control" />
                  </div>

                  <div className="col-md-4 form-group">
                    <input type="text" placeholder=".col-md-4" className="form-control" />
                  </div>

                  <div className="col-md-4 form-group">
                    <input type="text" placeholder=".col-md-4" className="form-control" />
                  </div>

                  <div className="col-md-4 form-group">
                    <input type="text" placeholder=".col-md-4" className="form-control" />
                  </div>

                  <div className="col-md-3 form-group">
                    <input type="text" placeholder=".col-md-3" className="form-control" />
                  </div>

                  <div className="col-md-3 form-group">
                    <input type="text" placeholder=".col-md-3" className="form-control" />
                  </div>

                  <div className="col-md-3 form-group">
                    <input type="text" placeholder=".col-md-3" className="form-control" />
                  </div>

                  <div className="col-md-3 form-group">
                    <input type="text" placeholder=".col-md-3" className="form-control" />
                  </div>

                  <div className="col-md-2 form-group">
                    <input type="text" placeholder=".col-md-2" className="form-control" />
                  </div>

                  <div className="col-md-2 form-group">
                    <input type="text" placeholder=".col-md-2" className="form-control" />
                  </div>

                  <div className="col-md-2 form-group">
                    <input type="text" placeholder=".col-md-2" className="form-control" />
                  </div>

                  <div className="col-md-2 form-group">
                    <input type="text" placeholder=".col-md-2" className="form-control" />
                  </div>

                  <div className="col-md-2 form-group">
                    <input type="text" placeholder=".col-md-2" className="form-control" />
                  </div>

                  <div className="col-md-2 form-group">
                    <input type="text" placeholder=".col-md-2" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>

                  <div className="col-md-1 form-group">
                    <input type="text" placeholder=".col-md-1" className="form-control" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default BasicElements;
