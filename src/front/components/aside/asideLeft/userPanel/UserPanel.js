// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  showUserPicture: boolean,
  userPicture: string,
  hello: string,
  username: string,
  online: boolean,
  connectionStatus: {
    online: 'Online' | string,
    disconnected: 'Disconnected' | string,
  },
};

const UserPanel = ({
  userPicture,
  showUserPicture,
  hello,
  username,
  online,
  connectionStatus,
}: Props) => (
  <div className="user-panel">
    {showUserPicture && (
      <div className="pull-left image">
        <img src={userPicture} className="img-circle" alt="User Image" />
      </div>
    )}
    <div className="pull-left info">
      <p>{`${hello} ${username}`}</p>
      <a href="#">
        {online && <i className="fa fa-circle text-success" />}
        {online && connectionStatus.online}
        {!online && <i className="fa fa-circle text-default" />}
        {!online && connectionStatus.disconnected}
      </a>
    </div>
  </div>
);

UserPanel.displayName = 'UserPanel';

UserPanel.propTypes = {
  hello: PropTypes.string,
  username: PropTypes.string,
  showUserPicture: PropTypes.bool,
  userPicture: PropTypes.any,
  connectionStatus: PropTypes.shape({
    online: PropTypes.string,
    disconnected: PropTypes.string,
  }),
  online: PropTypes.bool,
};

UserPanel.defaultProps = {
  hello: 'Hello',
  username: 'Jane',
  connectionStatus: {
    online: 'Online',
    disconnected: 'Disconnected',
  },
  online: false,
  showUserPicture: true,
};

export default UserPanel;
