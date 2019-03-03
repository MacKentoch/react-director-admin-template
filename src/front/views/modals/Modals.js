import React from 'react';

const Modals = () => {
  return(
    <section>
      {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) */}
      <div id="generalViewModals">
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="myModalGeneral"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  Modal Tittle
                </h4>
              </div>
              <div className="modal-body">
                Body goes here...
              </div>
              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button
                  className="btn btn-success"
                  type="button">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="myModalGeneral2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  Modal Tittle
                </h4>
              </div>
              <div className="modal-body">
                Body goes here...
              </div>
              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button
                  className="btn btn-warning"
                  type="button">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="myModalGeneral3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  Modal Tittle
                </h4>
              </div>
              <div className="modal-body">
                Body goes here...
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger"
                  type="button">
                   Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- modal --> */}
        {/* <!-- Modal --> */}
      </div>
      <div id="basicElementsModals">
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="myModalBasicElements"
          className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                  ×
                </button>
                <h4 className="modal-title">
                  Form Tittle
                </h4>
              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">
                      File input
                    </label>
                    <input
                      type="file"
                      id="exampleInputFile3"
                    />
                    <p className="help-block">
                      Example block-level help text here.
                    </p>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                       Check me out
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="myModalBasicElements-1"
          className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                  ×
                </button>
                <h4 className="modal-title">
                  Form Tittle
                </h4>
              </div>
              <div className="modal-body">
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
                        id="inputEmail4"
                        placeholder="Email"
                      />
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
                        id="inputPassword4"
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
                      <button
                        type="submit"
                        className="btn btn-default">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="myModalBasicElements-2"
          className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                  ×
                </button>
                <h4 className="modal-title">
                  Form Tittle
                </h4>
              </div>
              <div className="modal-body">
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
                      className="form-control sm-input"
                      id="exampleInputEmail5"
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
                      className="form-control sm-input"
                      id="exampleInputPassword5"
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
                    className="btn btn-default">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Modals;
