
import React, { PropTypes } from 'react';
import cx from 'classnames';

const TabPanelHeader = ({tabItems}) => {
  const oneTabAtLeastIsActive = tabItems.some(item => item.isActive === true);

  return (
      <header className="panel-heading tab-bg-dark-navy-blue">
        <ul className="nav nav-tabs">
          {
            tabItems.map(
              (item, itemIdx) => {
                const { name, tablink, isActive } = item;

                return (
                  <li
                    key={itemIdx}
                    className={
                      cx({
                        active: isActive || (!oneTabAtLeastIsActive && itemIdx === 0)
                      })
                    }>
                    <a
                      data-toggle="tab"
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
