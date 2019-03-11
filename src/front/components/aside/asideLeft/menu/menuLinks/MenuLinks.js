// @flow

import React from 'react';
import PropTypes from 'prop-types';
import ViewLink from './viewLink/ViewLink';

type View = {
  name: string,
  linkTo: string,
  faIconName: string,
  itemCount?: number,
};
type Props = {
  activeView: string,
  views: Array<View>,
};

function MenuLinks({ activeView, views }: Props) {
  return (
    <ul className="sidebar-menu sidebar-menu__marginTop">
      {views.map(({ name, linkTo, faIconName, itemCount }, idx) => {
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
      })}
    </ul>
  );
}

MenuLinks.displayName = 'MenuLinks';

MenuLinks.propTypes = {
  activeView: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string.isRequired,
      itemCount: PropTypes.number,
    }),
  ).isRequired,
};

export default MenuLinks;
