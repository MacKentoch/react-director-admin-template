import React, {
  Component,
  PropTypes
}                     from 'react';
import Chart          from 'chart.js';
import {
  earningGraphMockData
}                     from '../../models';
import shallowCompare from 'react-addons-shallow-compare';
import Panel          from '../panel/Panel';


class EarningGraph extends Component {

  componentDidMount() {
    const { labels, datasets } = this.props;
    this.drawChart({labels, datasets});
  }

  componentWillReceiveProps(newProps) {
    const { labels, datasets } = this.props;
    if ((newProps.labels.length > 0 && newProps.datasets.length > 0) &&
        (labels.length === 0 && datasets.length === 0)) {
      this.drawChart({
        labels: newProps.labels,
        datasets: newProps.datasets
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Panel
        hasTitle={true}
        title={'Earning Graph'}>
        <canvas
          ref={ (ref)=>{
            this.linechart = ref;
          } }
          id="linechart"
          width="600"
          height="330" >
        </canvas>
      </Panel>
    );
  }

  drawChart(data) {
    // BAR CHART
    const options = {
      responsive : true,
      maintainAspectRatio: true
    };

    this.chart = new Chart(this.linechart.getContext('2d'), {
      type: 'line',
      data,
      options
    });
  }
}

EarningGraph.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array
};

EarningGraph.defaultProps = {
  data: earningGraphMockData
};

export default EarningGraph;
