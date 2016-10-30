import React, { PropTypes } from 'react';
import {
  Motion,
  spring
}                           from 'react-motion';

const MenuHeader = ({title, backColor, isCollapsed, onClick}) => {
  return (
    <ul
      className="list-inline sidebar-menu__group-container"
      onClick={onClick}>
      <li style={{width: '100%', backgroundColor: backColor}}>
        <a
          className="btn"
          style={{width: '100%', paddinLeft: '0px !important'}}>
          <span className="pull-left sidebar-menu__group-title">
            {title}
          </span>
          <Motion
            style={{
              deg: isCollapsed ? spring(0) : spring(180)
            }} >
            {
              ({ deg }) => {
                return (
                  <i
                    className="fa fa-angle-up fa-1x pull-right"
                    style={{
                      WebkitTransform: `rotate(${deg}deg)`,
                      transform: `rotate(${deg}deg)`
                    }}
                    aria-hidden="true">
                  </i>
                );
              }
            }
          </Motion>
        </a>
      </li>
    </ul>
  );
};

MenuHeader.propTypes = {
  backColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuHeader;
