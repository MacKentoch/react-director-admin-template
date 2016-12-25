
import React, { PropTypes } from 'react';
import cx from 'classnames';

const TabPanelHeader = ({tabItems}) => {
  const oneTabAtLeastIsActive = tabItems.some(item => item.isActive === true);

  let tabItemsToDisplay = [...tabItems];
  if (!oneTabAtLeastIsActive) {
    tabItemsToDisplay = tabItems.map((item, itemIdx) => {
      if (itemIdx === 0) {
        return {
          ...item,
          isActive: true
        };
      }
      return item;
    });
  }

  return (
      <header className="panel-heading tab-bg-dark-navy-blue">
        <ul className="nav nav-tabs">
          {
            tabItemsToDisplay.map(
              (item, itemIdx) => {
                const { name, tablink, isActive } = item;

                return (
                  <li
                    key={itemIdx}
                    className={ cx({ active: isActive }) }>
                    <a
                      data-toggle="tab"
                      aria-expanded={isActive === true ? 'true' : 'false'}
                      href={`#${tablink}`}>
                      &nbsp;
                      {name}
                    </a>
                  </li>
                );
              }
            )
          }
        </ul>
      </header>
    );
};

TabPanelHeader.propTypes = {
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tablink: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default TabPanelHeader;
