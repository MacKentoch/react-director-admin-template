// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import {
  AnimatedView,
  Panel,
  ProgressBar as ProgressBarComponent,
} from '../../components';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterBasicProgressBar: () => any,
    leaveBasicProgressBar: () => any,
  },
} & RouterProps;

const source = `
  // import
  import { ProgressBar } from './_SOMEWHERE_/components';

  // in render():
  <div className="row">
    <div className="col-xs-12">
      <Panel
        title="Basic Progress Bars"
        hasTitle={true}>
        <p>
          <code>
            .progress
          </code>
        </p>
        <ProgressBar
          barSize="progress"
          barStriped={false}
          barStyle="primary"
          active={false}
          valueNow={40}
          valueMin={0}
          valueMax={100}
          screenReadersText={'40% Complete (success)'}
        />
        <p>
          Class:
          <code>
            .sm
          </code>
        </p>
        <ProgressBar
          barSize="sm"
          barStriped={false}
          barStyle="success"
          active={true}
          valueNow={20}
          valueMin={0}
          valueMax={100}
          screenReadersText={'20% Complete'}
        />
        <p>
          Class:
          <code>
            .xs
          </code>
        </p>
        <ProgressBar
          barSize="xs"
          barStriped={false}
          barStyle="warning"
          active={false}
          valueNow={60}
          valueMin={0}
          valueMax={100}
          screenReadersText={'60% Complete (warning)'}
        />
        <p>
          Class:
          <code>
            .xxs
          </code>
        </p>
        <ProgressBar
          barSize="xxs"
          barStriped={false}
          barStyle="danger"
          active={false}
          valueNow={60}
          valueMin={0}
          valueMax={100}
          screenReadersText={'60% Complete (warning)'}
        />
      </Panel>
    </div>
  </div>
`;

function BasicProgressBar({
  actions: { enterBasicProgressBar, leaveBasicProgressBar },
}: Props) {
  useEffect(() => {
    enterBasicProgressBar();

    return () => {
      leaveBasicProgressBar();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel title="Basic Progress Bars" hasTitle={true}>
            <p>
              <code>.progress</code>
            </p>
            <ProgressBarComponent
              barSize="progress"
              barStriped={false}
              barStyle="primary"
              active={false}
              valueNow={40}
              valueMin={0}
              valueMax={100}
              screenReadersText={`${40}% Complete (success)`}
            />
            <p>
              Class:
              <code>.sm</code>
            </p>
            <ProgressBarComponent
              barSize="sm"
              barStriped={false}
              barStyle="success"
              active={true}
              valueNow={20}
              valueMin={0}
              valueMax={100}
              screenReadersText={`${20}% Complete`}
            />
            <p>
              Class:
              <code>.xs</code>
            </p>
            <ProgressBarComponent
              barSize="xs"
              barStriped={false}
              barStyle="warning"
              active={false}
              valueNow={60}
              valueMin={0}
              valueMax={100}
              screenReadersText={`${60}% Complete (warning)`}
            />
            <p>
              Class:
              <code>.xxs</code>
            </p>
            <ProgressBarComponent
              barSize="xxs"
              barStriped={false}
              barStyle="danger"
              active={false}
              valueNow={60}
              valueMin={0}
              valueMax={100}
              screenReadersText={`${60}% Complete (warning)`}
            />
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

BasicProgressBar.displayName = 'BasicProgressBar';

BasicProgressBar.propTypes = {
  // react-router
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  actions: PropTypes.shape({
    enterBasicProgressBar: PropTypes.func.isRequired,
    leaveBasicProgressBar: PropTypes.func.isRequired,
  }),
};

export default BasicProgressBar;
