// @flow

import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { earningGraphMockData } from '../../models';
import Panel from '../panel/Panel';

type Dataset = {
  label: string,
  fillColor: string,
  strokeColor: string,
  pointColor: string,
  pointStrokeColor: string,
  pointHighlightFill: string,
  pointHighlightStroke: string,
  data: number[],
};

type Data = {
  labels: Array<string>,
  datasets: Array<Dataset>,
};

type Props = {} & Data;

const options = {
  responsive: true,
  maintainAspectRatio: true,
};

function EarningGraph({ labels, datasets }: Props) {
  const chart = useRef(null);
  const linechart = useRef(null);
  const prevLabels = useRef([]);
  const prevDatasets = useRef([]);

  const drawChart = useCallback((data: Data) => {
    if (linechart.current) {
      chart.current = new Chart(linechart.current.getContext('2d'), {
        type: 'line',
        data: { labels, datasets },
        options,
      });
    }
  });

  useEffect(() => {
    prevLabels.current = labels;
    prevDatasets.current = datasets;
    drawChart({ labels, datasets });
  }, []);

  useEffect(() => {
    if (
      labels.length > 0 &&
      datasets.length > 0 &&
      (prevLabels.current.length === 0 && prevDatasets.current.length === 0)
    ) {
      drawChart({ labels, datasets });
    }
  }, [labels, datasets]);

  return (
    <Panel hasTitle title={'Earning Graph'}>
      <canvas ref={linechart} id="linechart" width="600" height="330" />
    </Panel>
  );
}

EarningGraph.displayName = 'EarningGraph';

EarningGraph.defaultProps = {
  data: earningGraphMockData,
};

EarningGraph.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array,
};

export default EarningGraph;
