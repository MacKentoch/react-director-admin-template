// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import Collapse       from 'react-collapse';
import MenuHeader     from './menuHeader/MenuHeader';
import MenuLinks      from './menuLinks/MenuLinks';

class Menu extends PureComponent {
  static propTypes = {
    headerTitle:      PropTypes.string.isRequired,
    headerBackColor:  PropTypes.string,
    activeView:       PropTypes.string.isRequired,
    views: PropTypes.arrayOf(
      PropTypes.shape({
        name:       PropTypes.string.isRequired,
        linkTo:     PropTypes.string.isRequired,
        faIconName: PropTypes.string.isRequired,
        itemCount:  PropTypes.number
      })
    ).isRequired,
    initialCollapseState: PropTypes.bool
  };

  static defaultProps = {
    headerBackColor: '#283744'
  };

  state = {
    isCollapsed: true
  };

  componentDidMount() {
    const { initialCollapseState } = this.props;
    if (typeof initialCollapseState === 'boolean') {
      this.setInitialCollapse(initialCollapseState);
    }
  }

  render() {
    const {
      headerTitle,
      headerBackColor,
      activeView,
      views
    } = this.props;
    const { isCollapsed } = this.state;

    return (
      <div>
        <MenuHeader
          title={headerTitle}
          isCollapsed={!isCollapsed}
          onClick={this.handlesCollapseClick}
          backColor={headerBackColor}
        />
        <Collapse
          isOpened={!isCollapsed}>
          <MenuLinks
            activeView={activeView}
            views={views}
          />
        </Collapse>
      </div>
    );
  }

  setInitialCollapse = (value) => {
    this.setState({ isCollapsed: value });
  }

  handlesCollapseClick = (evt) => {
    evt.preventDefault();
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }
}

export default Menu;
