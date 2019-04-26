// @flow

// #region imports
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import auth from '../../services/auth';
import { type RouterProps } from '../../types/react-router';
// #endregion

// #region flow types
type Props = {
  // views props:
  currentView: string,
  enterLogin: () => void,
  leaveLogin: () => void,

  // userAuth:
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean,
  disconnectUser: () => any,
  logUserIfNeeded: (email: string, password: string) => Promise<any>,
} & RouterProps;
// #endregion

function Login({
  isFetching = false,
  isLogging = false,
  enterLogin,
  disconnectUser,
  leaveLogin,
  history,
  logUserIfNeeded,
}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // #region on mount and unmount:
  useEffect(() => {
    disconnectUser(); // diconnect user: remove token and user info
    enterLogin();

    return () => {
      leaveLogin();
    };
  }, []);

  // #region form inputs change callbacks
  const handlesOnEmailChange = useCallback((event: SyntheticEvent<*>) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      // $FlowIgnore
      setEmail({ email: event.target.value.trim() });
    }
  }, []);

  const handlesOnPasswordChange = useCallback((event: SyntheticEvent<*>) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      // $FlowIgnore
      setPassword({ password: event.target.value.trim() });
    }
  }, []);
  // #endregion

  // #region on login button click callback
  const handlesOnLogin = useCallback(
    async (event: SyntheticEvent<>) => {
      event && event.preventDefault();

      try {
        const response = await logUserIfNeeded(email, password);
        const {
          data: { token, login, firstname, lastname, picture, showPicture },
        } = response.payload;

        const user = {
          login,
          firstname,
          lastname,
          picture,
          showPicture,
        };
        auth.setToken(token);
        auth.setUserInfo(user);

        history.push({ pathname: '/' }); // back to Home
      } catch (error) {
        /* eslint-disable no-console */
        console.log('login went wrong..., error: ', error);
        /* eslint-enable no-console */
      }
    },
    [email, password],
  );
  // #endregion

  // #region on go back home button click callback
  const goHome = useCallback((event: SyntheticEvent<>) => {
    event && event.preventDefault();
    history.push({ pathname: '/' });
  }, []);
  // #endregion

  return (
    <div className="content">
      <Row>
        <Col md={4} mdOffset={4} xs={10} xsOffset={1}>
          <form className="form-horizontal" noValidate>
            <fieldset>
              <legend className="text-center">
                <h1>
                  <i className="fa fa-3x fa-user-circle" aria-hidden="true" />
                </h1>
                <h2>Login</h2>
              </legend>

              <div className="form-group">
                <label htmlFor="inputEmail" className="col-lg-2 control-label">
                  Email
                </label>
                <div className="col-lg-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    value={email}
                    onChange={handlesOnEmailChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="inputPassword"
                  className="col-lg-2 control-label"
                >
                  Password
                </label>
                <div className="col-lg-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={handlesOnPasswordChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <Col lg={10} lgOffset={2}>
                  <Button
                    className="login-button btn-block"
                    bsStyle="primary"
                    disabled={isLogging}
                    onClick={handlesOnLogin}
                  >
                    {isLogging ? (
                      <span>
                        login in... &nbsp;
                        <i className="fa fa-spinner fa-pulse fa-fw" />
                      </span>
                    ) : (
                      <span>Login</span>
                    )}
                  </Button>
                </Col>
              </div>
            </fieldset>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md={4} mdOffset={4} xs={10} xsOffset={1}>
          <div className="pull-right">
            <Button bsStyle="default" onClick={goHome}>
              back to home
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

Login.displayName = 'Login';

Login.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  // views props:
  currentView: PropTypes.string.isRequired,
  enterLogin: PropTypes.func.isRequired,
  leaveLogin: PropTypes.func.isRequired,

  // userAuth:
  isAuthenticated: PropTypes.bool,
  isFetching: PropTypes.bool,
  isLogging: PropTypes.bool,
  disconnectUser: PropTypes.func.isRequired,
  logUserIfNeeded: PropTypes.func.isRequired,
};

export default Login;
