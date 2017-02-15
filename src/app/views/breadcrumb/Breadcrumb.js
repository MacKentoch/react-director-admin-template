import React, {
  PropTypes,
  PureComponent
}                         from 'react';
import {
  AnimatedView,
  Panel,
  Breadcrumb as BreadcrumbComponent
}                         from '../../components';
import Highlight          from 'react-highlight';


class Breadcrumb extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterBreadcrumb: PropTypes.func.isRequired,
      leaveBreadcrumb: PropTypes.func.isRequired
    })
  };

  state = { path: ['home', 'breadcrumb'] };

  componentWillMount() {
    const { actions: { enterBreadcrumb } } = this.props;
    enterBreadcrumb();
  }

  componentWillUnmount() {
    const { actions: { leaveBreadcrumb } } = this.props;
    leaveBreadcrumb();
  }

  render() {
    const { path } = this.state;

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

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Breadcrumb"
              hasTitle={true}
              bodyBackGndColor={'#F4F5F6'}>
              <div className="row">
                <div className="col-xs-12">
                  <BreadcrumbComponent
                    path={path}
                  />
                </div>
              </div>
            </Panel>
          </div>
        </div>
        {/* source: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Source"
              hasTitle={true}>
              <Highlight className="javascript">
                {source}
              </Highlight>
            </Panel>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default Breadcrumb;
