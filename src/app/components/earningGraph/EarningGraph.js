'use strict';

import React, {
  Component,
  PropTypes
}                 from 'react';
import Chart      from 'chart.js';

class EarningGraph extends Component {

  componentDidMount() {
    // BAR CHART
    const data = {
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
    const options = {
      responsive : true,
      maintainAspectRatio: false
    };
    console.log('ChartJS: ', Chart);
    new Chart(this.linechart.getContext('2d'))
        .Line(data, options);
  }

  render() {
    return (
      <section className="panel">
        <header className="panel-heading">
          Earning Graph
        </header>
        <div className="panel-body">
          <canvas
            ref={(ref)=>{this.linechart = ref;}}
            id="linechart"
            width="600"
            height="330">
          </canvas>
        </div>
      </section>
    );
  }
}

EarningGraph.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array
};

export default EarningGraph;
