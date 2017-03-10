import React, {
  PureComponent,
  PropTypes
}                       from 'react';
import ViewLink         from './viewLink/ViewLink';


class MenuLinks extends PureComponent {
  render() {
    const { activeView, views } = this.props;
    return (
      <ul className="sidebar-menu sidebar-menu__marginTop">
        {
          views.map(
            ({name, linkTo, faIconName, itemCount}, idx) => {
              return (
                <ViewLink
                  key={idx}
                  isActive={activeView === name}
                  linkTo={linkTo}
                  viewName={name}
                  faIconName={faIconName}
                  itemCount={itemCount ? itemCount : 0}
                />
              );
            }
          )
        }
      </ul>
    );
  }
}

MenuLinks.propTypes = {
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

export default MenuLinks;
