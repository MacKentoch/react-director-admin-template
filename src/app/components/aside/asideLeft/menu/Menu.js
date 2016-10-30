import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Collapse       from 'react-collapse';
import MenuHeader     from './menuHeader/MenuHeader';
import MenuLinks      from './menuLinks/MenuLinks';

class Menu extends Component {
  state = {
    isCollapsed: true
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
          isOpened={!isCollapsed}
          keepCollapsedContent={false}>
          <MenuLinks
            activeView={activeView}
            views={views}
          />
        </Collapse>
      </div>
    );
  }

  handlesCollapseClick = (evt) => {
    evt.preventDefault();
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }
}

Menu.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  headerBackColor: PropTypes.string,
  activeView: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string.isRequired,
      itemCount: PropTypes.number
    })
  ).isRequired
};

Menu.defaultProps = {
  headerBackColor: '#283744'
};

export default Menu;
