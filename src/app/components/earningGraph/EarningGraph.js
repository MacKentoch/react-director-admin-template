import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import Chart          from 'chart.js';
import {
  earningGraphMockData
}                     from '../../models';
import Panel          from '../panel/Panel';


class EarningGraph extends PureComponent {
  static propTypes = {
    labels:   PropTypes.array,
    datasets: PropTypes.array
  };

  static defaultProps = {
    data: earningGraphMockData
  };

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

  render() {
    return (
      <Panel
        hasTitle={true}
        title={'Earning Graph'}>
        <canvas
          ref={this.getCanvaRef}
          id="linechart"
          width="600"
          height="330" >
        </canvas>
      </Panel>
    );
  }

  getCanvaRef = ref => (this.linechart = ref)

  drawChart(data) {
    // BAR CHART
    const options = {
      responsive : true,
      maintainAspectRatio: true
    };

    this.chart = new Chart(
      this.linechart.getContext('2d'),
      {
        type: 'line',
        data,
        options
      }
    );
  }
}

export default EarningGraph;
