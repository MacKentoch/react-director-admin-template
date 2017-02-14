import React, {
  PropTypes,
  PureComponent
}                         from 'react';
import {
  AnimatedView,
  Panel,
  Pagination as PaginationComponent,
  Pager as PagerComponent
}                         from '../../components';
import Highlight          from 'react-highlight';


class PaginationView extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterPagination: PropTypes.func.isRequired,
      leavePagination: PropTypes.func.isRequired
    })
  };

  componentWillMount() {
    const { actions: { enterPagination } } = this.props;
    enterPagination();
  }

  componentWillUnmount() {
    const { actions: { leavePagination } } = this.props;
    leavePagination();
  }

  render() {
    const source = `
      // in render():
      <div className="text-center">
        <Pagination
          size="large"
          numberOfPagination={5}
        />
      </div>
      <div className="text-center">
        <Pagination
          numberOfPagination={5}
        />
      </div>
      <div className="text-center">
        <Pagination
          size="small"
          numberOfPagination={5}
        />
      </div>
      <div>
        <h3>Default Example</h3>
        <Pager
          aligned={false}
          previous={'Previous'}
          next={'Next'}
        />
      </div>
      <div>
        <h3>Aligned links</h3>
        <Pager
          aligned={true}
          previous={
            <div>
              <span aria-hidden="true">
                &larr;
              </span>
              Older
            </div>
          }
          next={(
            <div>
              Newer
              <span aria-hidden="true">
                &rarr;
              </span>
            </div>
          )}
        />
      </div>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Pagination"
              hasTitle={true}>
              <div className="text-center">
                <PaginationComponent
                  size="large"
                  numberOfPagination={5}
                />
              </div>
              <div className="text-center">
                <PaginationComponent
                  numberOfPagination={5}
                />
              </div>
              <div className="text-center">
                <PaginationComponent
                  size="small"
                  numberOfPagination={5}
                />
              </div>
              <div>
                <h3>
                  Default Example
                </h3>
                <PagerComponent
                  aligned={false}
                  previous={'Previous'}
                  next={'Next'}
                />
              </div>
              <div>
                <h3>
                  Aligned links
                </h3>
                <PagerComponent
                  aligned={true}
                  previous={
                    <div>
                      <span aria-hidden="true">
                        &larr;
                      </span>
                      Older
                    </div>
                  }
                  next={(
                    <div>
                      Newer
                      <span aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                  )}
                />
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

export default PaginationView;
