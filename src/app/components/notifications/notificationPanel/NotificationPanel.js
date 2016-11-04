import React, { PropTypes } from 'react';

const NotificationPanel = ({title, children}) => {
  return (
    <section className="panel">
      <header className="panel-heading">
        {title}
      </header>
      <div
        className="panel-body notification--body-container"
        id="noti-box">
        {children}
      </div>
    </section>
  );
};

NotificationPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

NotificationPanel.defaultProps = {
  title: 'Notifications'
};

export default NotificationPanel;
