// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  title?: string,
  children: any,
};

const NotificationPanel = ({ title = 'Notifications', children }: Props) => (
  <section className="panel">
    <header className="panel-heading">{title}</header>
    <div className="panel-body notification--body-container" id="noti-box">
      {children}
    </div>
  </section>
);

NotificationPanel.displayName = 'NotificationPanel';

NotificationPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NotificationPanel;
