import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  EarningGraph as EarningGraphComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class EarningGraph extends Component {

  state = {
    animated: true,
    viewEnters: false,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  componentWillMount() {
    const { actions: { enterEarningGraph } } = this.props;
    enterEarningGraph();
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
    const { actions: { leaveEarningGraph } } = this.props;
    leaveEarningGraph();
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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      // in render():
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <EarningGraph
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

EarningGraph.propTypes= {
  actions: PropTypes.shape({
    enterEarningGraph: PropTypes.func.isRequired,
    leaveEarningGraph: PropTypes.func.isRequired
  })
};

export default EarningGraph;
