// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedView,
  Panel,
  ProgressBar as ProgressBarComponent,
} from '../../components';
import Highlight from 'react-highlight';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterStripedProgressBar: () => any,
    leaveStripedProgressBar: () => any,
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
          barStriped={true}
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
          barStriped={true}
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
          barStriped={true}
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
          barStriped={true}
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

function StripedProgressBar({
  actions: { enterStripedProgressBar, leaveStripedProgressBar },
}: Props) {
  useEffect(() => {
    enterStripedProgressBar();

    return () => {
      leaveStripedProgressBar();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel title="Striped Progress Bars" hasTitle={true}>
            <p>
              <code>.progress</code>
            </p>
            <ProgressBarComponent
              barSize="progress"
              barStriped={true}
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
              barStriped={true}
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
              barStriped={true}
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
              barStriped={true}
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

StripedProgressBar.displayName = 'StripedProgressBar';

StripedProgressBar.propTypes = {
  actions: PropTypes.shape({
    enterStripedProgressBar: PropTypes.func.isRequired,
    leaveStripedProgressBar: PropTypes.func.isRequired,
  }),
};

export default StripedProgressBar;
