import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCol
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class WorkProgress extends Component {

  state = {
    animated: true,
    viewEnters: false,
    headers: ['#', 'Project', 'Manager', 'Deadline', 'Status', 'Progress'],
    content: [
      ['1', 'Facebook', 'Mark', '10/10/2014', <span className="label label-danger">in progress</span>, <span className="badge badge-info">50%</span>],
      ['2', 'Twitter', 'Evan', '10/8/2014', <span className="label label-success">completed</span>, <span className="badge badge-success">100%</span>],
      ['3', 'Google', 'Larry', '10/12/2014', <span className="label label-warning">in progress</span>, <span className="badge badge-warning">75%</span>],
      ['4', 'LinkedIn', 'Allen', '10/01/2015', <span className="label label-info">in progress</span>, <span className="badge badge-info">65%</span>],
      ['5', 'Tumblr', 'David', '01/11/2014', <span className="label label-warning">in progress</span>, <span className="badge badge-danger">95%</span>],
      ['6', 'Tesla', 'Musk', '01/11/2014', <span className="label label-info">in progress</span>, <span className="badge badge-success">95%</span>],
      ['7', 'Ghost', 'XXX', '01/11/2014', <span className="label label-info">in progress</span>, <span className="badge badge-success">95%</span>]
    ]
  };

  componentWillMount() {
    const { actions: { enterWorkProgress } } = this.props;
    enterWorkProgress();
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
    const { actions: { leaveWorkProgress } } = this.props;
    leaveWorkProgress();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const {} = this.props;
    const { animated, viewEnters } = this.state;

    const source = `
      // import
      import { EarningGraph } from './_SOMEWHERE_/components';

      // labels and data (in state for example):
      state = {
        headers: ['#', 'Project', 'Manager', 'Deadline', 'Status', 'Progress'],
        content: [
          ['1', 'Facebook', 'Mark', '10/10/2014', <span className="label label-danger">in progress</span>, <span className="badge badge-info">50%</span>],
          ['2', 'Twitter', 'Evan', '10/8/2014', <span className="label label-success">completed</span>, <span className="badge badge-success">100%</span>],
          ['3', 'Google', 'Larry', '10/12/2014', <span className="label label-warning">in progress</span>, <span className="badge badge-warning">75%</span>],
          ['4', 'LinkedIn', 'Allen', '10/01/2015', <span className="label label-info">in progress</span>, <span className="badge badge-info">65%</span>],
          ['5', 'Tumblr', 'David', '01/11/2014', <span className="label label-warning">in progress</span>, <span className="badge badge-danger">95%</span>],
          ['6', 'Tesla', 'Musk', '01/11/2014', <span className="label label-info">in progress</span>, <span className="badge badge-success">95%</span>],
          ['7', 'Ghost', 'XXX', '01/11/2014', <span className="label label-info">in progress</span>, <span className="badge badge-success">95%</span>]
        ]
      };

      // in render():
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <EarningGraphComponent
            labels={this.state.labels}
            datasets={this.state.datasets}
          />
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
            title="Earning graph"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <EarningGraphComponent
                  labels={this.state.labels}
                  datasets={this.state.datasets}
                />
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

WorkProgress.propTypes= {
  actions: PropTypes.shape({
    enterWorkProgress: PropTypes.func.isRequired,
    leaveWorkProgress: PropTypes.func.isRequired
  })
};

export default WorkProgress;
