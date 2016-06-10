'use strict';

import React from 'react';

const EarningGraph = () => {
  return (
    <section className="panel">
      <header className="panel-heading">
        Earning Graph
      </header>
      <div className="panel-body">
        <canvas id="linechart" width="600" height="330"></canvas>
      </div>
    </section>
  );
};

export default EarningGraph;
