// @flow

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import {
  AnimatedView,
  Panel,
  Breadcrumb as BreadcrumbComponent,
} from '../../components';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterBreadcrumb: () => any,
    leaveBreadcrumb: () => any,
  },
} & RouterProps;

const source = `
  // import
  import { Breadcrumb } from './_SOMEWHERE_/components';

  // path (in state for example):
  state = {
    path: ['home', 'breadcrumb']
  };

  // in render():
  <BreadcrumbComponent
    path={this.state.path}
  />
`;

function Breadcrumb({ actions: { enterBreadcrumb, leaveBreadcrumb } }: Props) {
  const [path] = useState(['home', 'breadcrumb']);

  useEffect(() => {
    enterBreadcrumb();

    return () => {
      leaveBreadcrumb();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Breadcrumb"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}
          >
            <div className="row">
              <div className="col-xs-12">
                <BreadcrumbComponent path={path} />
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

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
  // react-router
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  actions: PropTypes.shape({
    enterBreadcrumb: PropTypes.func.isRequired,
    leaveBreadcrumb: PropTypes.func.isRequired,
  }),
};

export default Breadcrumb;
