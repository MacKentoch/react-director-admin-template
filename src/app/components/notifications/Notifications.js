import React         from 'react';
import Notification  from './notification/Notification';

const Notifications = () => {
  return (
    <section className="panel">
      <header className="panel-heading">
        Notifications
      </header>
      <div
        className="panel-body notification--body-container"
        id="noti-box">

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

      </div>
    </section>
  );
};

export default Notifications;
