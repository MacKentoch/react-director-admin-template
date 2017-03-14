import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import Collapse       from 'react-collapse';
import MenuHeader     from './menuHeader/MenuHeader';
import MenuLinks      from './menuLinks/MenuLinks';

class Menu extends PureComponent {
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

  setInitialCollapse = (value) => {
    this.setState({ isCollapsed: value });
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
  ).isRequired,
  initialCollapseState: PropTypes.bool
};

Menu.defaultProps = {
  headerBackColor: '#283744'
};

export default Menu;
