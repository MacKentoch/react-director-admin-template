// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type Props = {
  title?: string,
  children: any,
};

const NotificationBody = styled.div`
  height: 370px;
  overflow-y: scroll;
`;

const NotificationPanel = ({ title = 'Notifications', children }: Props) => (
  <section className="panel">
    <header className="panel-heading">{title}</header>
    <NotificationBody className="panel-body" id="noti-box">
      {children}
    </NotificationBody>
  </section>
);

NotificationPanel.displayName = 'NotificationPanel';

NotificationPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NotificationPanel;
