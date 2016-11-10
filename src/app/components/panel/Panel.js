import React, { PropTypes } from 'react';

const Panel = ({
  hasTitle,
  title,
  bodyBackGndColor,
  bodyCustomClass,
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
      <div
        className={`panel-body ${bodyCustomClass}`}
        style={{backgroundColor: bodyBackGndColor}}>
        { children }
      </div>
    </section>
  );
};

Panel.propTypes = {
  hasTitle: PropTypes.bool,
  title: PropTypes.string,
  bodyBackGndColor: PropTypes.string,
  bodyCustomClass: PropTypes.string,
  children: PropTypes.node
};

Panel.defaultProps = {
  hasTitle: true,
  title: 'no title set',
  bodyBackGndColor: '#FFF'
};

export default Panel;
