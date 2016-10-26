import React, { PropTypes } from 'react';

const Panel = ({
  hasTitle,
  title,
  children
}) => {
  return (
    <section className="panel">
      {
        hasTitle &&
        <header className="panel-heading">
          {title}
        </header>
      }
      <div className="panel-body">
        { children }
      </div>
    </section>
  );
};

Panel.propTypes = {
  hasTitle: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

Panel.defaultProps = {
  hasTitle: true,
  title: 'no title set'
};

export default Panel;
