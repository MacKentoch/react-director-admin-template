import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  Alert as AlertComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class AlertView extends Component {

  state = {
    animated: true,
    viewEnters: false
  };

  componentWillMount() {
    const { actions: { enterBasicProgressBar } } = this.props;
    enterBasicProgressBar();
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
    const { actions: { leaveBasicProgressBar } } = this.props;
    leaveBasicProgressBar();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { animated, viewEnters } = this.state;

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
      </section>
    );
  }
}

AlertView.propTypes= {
  actions: PropTypes.shape({
    enterBasicProgressBar: PropTypes.func.isRequired,
    leaveBasicProgressBar: PropTypes.func.isRequired
  })
};

export default AlertView;
