// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  title?: string,
  children: any,
};

const WorkProgressPanel = ({ title = 'Work Progress', children }: Props) => (
  <section className="panel">
    <header className="panel-heading">{title}</header>
    <div className="panel-body table-responsive">{children}</div>
  </section>
);

WorkProgressPanel.displayName = 'WorkProgressPanel';

WorkProgressPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default WorkProgressPanel;
