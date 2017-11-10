// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import cx         from 'classnames';

const defaultBackGroundColor = '#4A4A4A';
const sideOffset    = '15px';
const bottomOffset  = '2px';
const defaultWidth  = '50px';
const defaultZindex = 10;
const defaultOpacity= 0.5;
const defaultStyle = {
  position: 'fixed',
  right:    sideOffset,
  left:     '',
  bottom:   bottomOffset,
  width:    defaultWidth,
  zIndex:   defaultZindex,
  opacity:  defaultOpacity,
  backgroundColor: defaultBackGroundColor
};

const BackToTopButton = ({
  onClick,
  position,
  children,
  motionStyle
}) => {
  const buttonStyle = setPosition(position, {...motionStyle, ...defaultStyle});

  return (
    <button
      style={buttonStyle}
      className={cx({
        'btn': true
      })}
      onClick={onClick}>
      {
        !children &&
          <div style={{marginRight: '0px'}}>
            <i
              style={{color: '#F1F1F1'}}
              className="fa fa-arrow-up"
              aria-hidden="true"
            />
          </div>
      }
      {
        !!children &&
          children
      }
    </button>
  );
};

BackToTopButton.propTypes = {
  position:     PropTypes.oneOf(['bottom-left', 'bottom-right']),
  onClick:      PropTypes.func.isRequired,
  children:     PropTypes.node,
  motionStyle:  PropTypes.object
};

BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

function setPosition(position = 'bottom-right', refStyle = defaultStyle) {
  const style = {...refStyle};

  switch (position) {
  case 'bottom-right':
    style.right = sideOffset;
    style.left  = '';
    return style;

  case 'bottom-left':
    style.right = '';
    style.left  = sideOffset;
    return style;

  default:
    return refStyle;
  }
}

export default BackToTopButton;
