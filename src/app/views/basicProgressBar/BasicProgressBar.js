import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  ProgressBar as ProgressBarComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class BasicProgressBar extends Component {

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
      // import
      import { ProgressBar } from './_SOMEWHERE_/components';

      // in render():
      <div className="row">
        <div className="col-xs-12">
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
              screenReadersText={'40% Complete (success)'}
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
              screenReadersText={'20% Complete'}
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
              screenReadersText={'60% Complete (warning)'}
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
              screenReadersText={'60% Complete (warning)'}
            />
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
            <p>
              <code>
                .progress
              </code>
            </p>
            <ProgressBarComponent
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
            <ProgressBarComponent
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
            <ProgressBarComponent
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
            <ProgressBarComponent
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

BasicProgressBar.propTypes= {
  actions: PropTypes.shape({
    enterBasicProgressBar: PropTypes.func.isRequired,
    leaveBasicProgressBar: PropTypes.func.isRequired
  })
};

export default BasicProgressBar;
