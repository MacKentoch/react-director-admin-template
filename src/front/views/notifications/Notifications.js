// @flow
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import {
  AnimatedView,
  Panel,
  NotificationPanel,
  Notification,
} from '../../components';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterNotifications: () => any,
    leaveNotifications: () => any,
  },
} & RouterProps;

const source = `
  // import
  import { NotificationPanel, Notification } from './_SOMEWHERE_/components';

  // in render():
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <NotificationPanel title="notifications">
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
    </div>
  </div>
`;

function Notifications({
  actions: { enterNotifications, leaveNotifications },
}: Props) {
  useEffect(() => {
    enterNotifications();

    return () => {
      leaveNotifications();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Notifications"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}
          >
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <NotificationPanel title="notifications">
                  <Notification type={'danger'}>
                    <span>
                      <strong>Oh snap!</strong>
                      Change a few things up and try submitting again.
                    </span>
                  </Notification>

                  <Notification type={'success'}>
                    <span>
                      <strong>Well done!</strong>
                      You successfully read this important alert message.
                    </span>
                  </Notification>

                  <Notification type={'info'}>
                    <span>
                      <strong>Heads up!</strong>
                      This alert needs your attention, but it's not super
                      important.
                    </span>
                  </Notification>

                  <Notification type={'warning'}>
                    <span>
                      <strong>Warning!</strong>
                      Best check yo self, you're not looking too good.
                    </span>
                  </Notification>

                  <Notification type={'danger'}>
                    <span>
                      <strong>Oh snap!</strong>
                      Change a few things up and try submitting again.
                    </span>
                  </Notification>
                </NotificationPanel>
              </div>
            </div>
          </Panel>
        </div>
      </div>
      {/* source: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel title="Source" hasTitle={true}>
            <Highlight className="javascript">{source}</Highlight>
          </Panel>
        </div>
      </div>
    </AnimatedView>
  );
}

Notifications.displayName = 'Notifications';

Notifications.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  actions: PropTypes.shape({
    enterNotifications: PropTypes.func.isRequired,
    leaveNotifications: PropTypes.func.isRequired,
  }),
};

export default Notifications;
