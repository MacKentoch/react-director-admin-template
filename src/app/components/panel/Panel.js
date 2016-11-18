import React, { PropTypes } from 'react';

const Panel = ({
  hasTitle,
  title,
  bodyBackGndColor,
  bodyCustomClass,
  sectionCustomClass,
  children
}) => {
  return (
    <section className={`panel ${sectionCustomClass}`}>
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
  sectionCustomClass: PropTypes.string,
  children: PropTypes.node
};

Panel.defaultProps = {
  hasTitle: true,
  title: 'no title set',
  sectionCustomClass: '',
  bodyBackGndColor: '#FFF'
};

export default Panel;
