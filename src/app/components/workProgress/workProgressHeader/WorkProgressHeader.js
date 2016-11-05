import React, { PropTypes } from 'react';

const WorkProgressHeader = ({title, children}) => {
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

WorkProgressHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

WorkProgressHeader.defaultProps = {
  title: 'Work Progress'
};

export default WorkProgressHeader;
