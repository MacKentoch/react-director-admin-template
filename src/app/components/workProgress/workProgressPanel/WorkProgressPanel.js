import React, { PropTypes } from 'react';

const WorkProgressPanel = ({title, children}) => {
  return (
    <section className="panel">
      <header className="panel-heading">
        {title}
      </header>
      <div className="panel-body table-responsive">
        {children}
      </div>
    </section>
  );
};

WorkProgressPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

WorkProgressPanel.defaultProps = {
  title: 'Work Progress'
};

export default WorkProgressPanel;
