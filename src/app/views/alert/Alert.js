import React, {
  PropTypes,
  PureComponent
}                         from 'react';
import {
  AnimatedView,
  Panel,
  Alert as AlertComponent
}                         from '../../components';
import Highlight          from 'react-highlight';


class AlertView extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterAlert: PropTypes.func.isRequired,
      leaveAlert: PropTypes.func.isRequired
    })
  };

  componentWillMount() {
    const { actions: { enterAlert } } = this.props;
    enterAlert();
  }

  componentWillUnmount() {
    const { actions: { leaveAlert } } = this.props;
    leaveAlert();
  }

  render() {
    const source = `
      // in render():
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Alert"
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
        </div>
      </div>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Basic Progress Bars"
              hasTitle={true}>
              <AlertComponent
                type="danger">
                <strong>
                  Oh snap!
                </strong>
                Change a few things up and try submitting again.
              </AlertComponent>

              <AlertComponent
                type="success">
                <strong>
                  Well done!
                </strong>
                You successfully read this important alert message.
              </AlertComponent>

              <AlertComponent
                type="info">
                <strong>
                  Heads up!
                </strong>
                This alert needs your attention, but it's not super important.
              </AlertComponent>

              <AlertComponent
                type="warning">
                <strong>
                  Warning!
                </strong>
                Best check yo self, you're not looking too good.
              </AlertComponent>

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
      </AnimatedView>
    );
  }
}

export default AlertView;
