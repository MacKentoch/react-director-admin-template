// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const NotificationPanel = ({
  title,
  children
}) => (
  <section className="panel">
    <header className="panel-heading">
      {title}
    </header>
    <div
      className="panel-body notification--body-container"
      id="noti-box">
      { children }
    </div>
  </section>
);

NotificationPanel.propTypes = {
  title:    PropTypes.string,
  children: PropTypes.node.isRequired
};

NotificationPanel.defaultProps = {
  title: 'Notifications'
};

export default NotificationPanel;
