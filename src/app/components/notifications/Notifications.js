import React              from 'react';
import NotificationPanel  from './notificationPanel/NotificationPanel';
import Notification       from './notification/Notification';

const Notifications = () => {
  return (
    <NotificationPanel>
        <Notification type={'danger'}>
          <span>
            <strong>
              Oh snap!
            </strong>
            Change a few things up and try submitting again.
          </span>
        </Notification>

        <Notification type={'success'}>
          <span>
            <strong>
              Well done!
            </strong>
            You successfully read this important alert message.
          </span>
        </Notification>

        <Notification type={'info'}>
          <span>
            <strong>
              Heads up!
            </strong>
            This alert needs your attention, but it's not super important.
          </span>
        </Notification>

        <Notification type={'warning'}>
          <span>
            <strong>
              Warning!
            </strong>
            Best check yo self, you're not looking too good.
          </span>
        </Notification>

        <Notification type={'danger'}>
          <span>
            <strong>
              Oh snap!
            </strong>
            Change a few things up and try submitting again.
          </span>
        </Notification>

    </NotificationPanel>
  );
};

export default Notifications;
