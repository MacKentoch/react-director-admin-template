import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  NotificationPanel,
  Notification
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class Notifications extends Component {

  state = {
    animated: true,
    viewEnters: false
  };

  componentWillMount() {
    const { actions: { enterNotifications } } = this.props;
    enterNotifications();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      () => this.setState({viewEnters: true}),
      500
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveNotifications } } = this.props;
    leaveNotifications();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const {} = this.props;
    const { animated, viewEnters } = this.state;

    const source = `
      // import
      import { NotificationPanel, Notification } from './_SOMEWHERE_/components';

      // in render():
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <NotificationPanel title="notifications">
              <Notification type={'danger'}>
                <span>
                  <strong>
                    Oh snap!
                  </strong>
                  Change a few things up and try submitting again.
                </span>
              </Notification>

              <Notification type={'success'}>
                <span>
                  <strong>
                    Well done!
                  </strong>
                  You successfully read this important alert message.
                </span>
              </Notification>

              <Notification type={'info'}>
                <span>
                  <strong>
                    Heads up!
                  </strong>
                  This alert needs your attention, but it's not super important.
                </span>
              </Notification>

              <Notification type={'warning'}>
                <span>
                  <strong>
                    Warning!
                  </strong>
                  Best check yo self, you're not looking too good.
                </span>
              </Notification>

              <Notification type={'danger'}>
                <span>
                  <strong>
                    Oh snap!
                  </strong>
                  Change a few things up and try submitting again.
                </span>
              </Notification>

          </NotificationPanel>
        </div>
      </div>
      `;

    return(
      <section className={
        cx({
          'content':       true,
          'animatedViews': animated,
          'invisible':     !viewEnters,
          'view-enter':    viewEnters
        })
      }>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Notifications"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">

                <NotificationPanel title="notifications">
                    <Notification type={'danger'}>
                      <span>
                        <strong>
                          Oh snap!
                        </strong>
                        Change a few things up and try submitting again.
                      </span>
                    </Notification>

                    <Notification type={'success'}>
                      <span>
                        <strong>
                          Well done!
                        </strong>
                        You successfully read this important alert message.
                      </span>
                    </Notification>

                    <Notification type={'info'}>
                      <span>
                        <strong>
                          Heads up!
                        </strong>
                        This alert needs your attention, but it's not super important.
                      </span>
                    </Notification>

                    <Notification type={'warning'}>
                      <span>
                        <strong>
                          Warning!
                        </strong>
                        Best check yo self, you're not looking too good.
                      </span>
                    </Notification>

                    <Notification type={'danger'}>
                      <span>
                        <strong>
                          Oh snap!
                        </strong>
                        Change a few things up and try submitting again.
                      </span>
                    </Notification>

                </NotificationPanel>

              </div>
            </div>
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
      </section>
    );
  }
}

Notifications.propTypes= {
  actions: PropTypes.shape({
    enterNotifications: PropTypes.func.isRequired,
    leaveNotifications: PropTypes.func.isRequired
  })
};

export default Notifications;
