// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

type Props = {
  title: string,
  backColor: string,
  isCollapsed: boolean,
  onClick: (event?: SyntheticEvent<>) => any,
};

const MenuHeader = ({ title, backColor, isCollapsed, onClick }: Props) => (
  <ul className="list-inline sidebar-menu__group-container" onClick={onClick}>
    <li style={{ width: '100%', backgroundColor: backColor }}>
      <a
        className="btn"
        style={{ width: '100%', paddinLeft: '0px !important' }}
      >
        <span className="pull-left sidebar-menu__group-title">{title}</span>
        <Motion
          style={{
            deg: isCollapsed ? spring(0) : spring(180),
          }}
        >
          {({ deg }) => {
            return (
              <i
                className="fa fa-angle-up fa-1x pull-right"
                style={{
                  WebkitTransform: `rotate(${deg}deg)`,
                  transform: `rotate(${deg}deg)`,
                }}
                aria-hidden="true"
              />
            );
          }}
        </Motion>
      </a>
    </li>
  </ul>
);

MenuHeader.displayName = 'MenuHeader';

MenuHeader.propTypes = {
  backColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuHeader;
