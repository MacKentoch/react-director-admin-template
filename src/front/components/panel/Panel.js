// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  hasTitle: boolean,
  title: string,
  bodyBackGndColor?: string,
  bodyCustomClass?: string,
  sectionCustomClass?: string,
  children: any,
};

const Panel = ({
  hasTitle = true,
  title = 'no title set',
  bodyBackGndColor = '#FFF',
  bodyCustomClass = '',
  sectionCustomClass = '',
  children,
}: Props) => (
  <section className={`panel ${sectionCustomClass}`}>
    {hasTitle && <header className="panel-heading">{title}</header>}
    <div
      className={`panel-body ${bodyCustomClass}`}
      style={{ backgroundColor: bodyBackGndColor }}
    >
      {children}
    </div>
  </section>
);

Panel.displayName = 'Panel';

Panel.propTypes = {
  hasTitle: PropTypes.bool,
  title: PropTypes.string,
  bodyBackGndColor: PropTypes.string,
  bodyCustomClass: PropTypes.string,
  sectionCustomClass: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
