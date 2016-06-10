'use strict';

import React, {
  Component,
  PropTypes
}                 from 'react';
import Chart      from 'chart.js';
import { earningGraphMockData } from '../../models';


class EarningGraph extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    // BAR CHART
    const options = {
      responsive : true,
      maintainAspectRatio: false
    };
    new Chart(this.linechart.getContext('2d'), {
      type: 'line',
      data: this.props.data,
      options
    });
  }

  render() {
    return (
      <section className="panel">
        <header className="panel-heading">
          Earning Graph
        </header>
        <div className="panel-body">
          <canvas
            ref={ (ref)=>{
              this.linechart = ref;
            } }
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
  data: PropTypes.shape({
    labels: PropTypes.array,
    datasets: PropTypes.array
  })
};

EarningGraph.defaultProps = {
  data: earningGraphMockData
}

export default EarningGraph;
