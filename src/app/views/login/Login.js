// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  Row,
  Col,
  Button
}                     from 'react-bootstrap';
// import AnimatedView   from '../../components/animatedView/AnimatedView';


function fakeLogin({ username }) {
  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({ token: '1234567890123456', username }),
        200
      );
    }
  );
}

class Login extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views props:
    currentView: PropTypes.string.isRequired,

    actions: PropTypes.shape({
      enterLogin:  PropTypes.func.isRequired,
      leaveLogin:  PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    email:          '',
    password:       '',
    isAuthenticating: false
  };

  componentDidMount() {
    const { actions: { enterLogin } } = this.props;
    enterLogin();
  }

  componentWillUnmount() {
    const { actions: { leaveLogin } } = this.props;
    leaveLogin();
  }

  render() {
    const {
      email,
      password,
      isAuthenticating
    } = this.state;

    return (
      <div className="content">
        <Row>
          <Col
            md={4}
            mdOffset={4}
          >
            <form
              className="form-horizontal"
              noValidate>
              <fieldset>
                <legend>
                  Login
                </legend>

                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label">
                    Email
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      value={email}
                      onChange={this.handlesOnEmailChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-lg-2 control-label">
                    Password
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={this.handlesOnPasswordChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <Col
                    lg={10}
                    lgOffset={2}
                  >
                    <Button
                      className="login-button btn-block"
                      bsStyle="primary"
                      disabled={isAuthenticating}
                      onClick={this.handlesOnLogin}>
                      {
                        isAuthenticating
                          ?
                          <span>
                            login in...
                            &nbsp;
                            <i
                              className="fa fa-spinner fa-pulse fa-fw"
                            />
                          </span>
                          :
                          <span>
                            Login
                          </span>
                      }
                    </Button>
                  </Col>
                </div>
              </fieldset>
            </form>
          </Col>
        </Row>
      </div>
    );
  }

  handlesOnEmailChange = (event) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ email: event.target.value.trim() });
  }

  handlesOnPasswordChange = (event) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ password: event.target.value.trim() });
  }

  handlesOnLogin = async (event) => {
    event.preventDefault();
    const {
      history
    } = this.props;

    const {
      email,
      password
    } = this.state;

    const user = {
      username: email,
      password: password
    };

    this.setState({ isAuthenticating: true });

    try {
      await fakeLogin(user);
      this.setState({ isAuthenticating: false });
      history.push({ pathname: '/' }); // back to Home
    } catch (error) {
      /* eslint-disable no-console */
      this.setState({ isAuthenticating: false });
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  }
}

export default Login;
