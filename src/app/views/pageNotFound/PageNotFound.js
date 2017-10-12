// @flow weak

import React, {
  PureComponent
}                       from 'react';
import PropTypes        from 'prop-types';
import AnimatedView     from '../../components/animatedView/AnimatedView';


class PageNotFound extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterPageNotFound: PropTypes.func.isRequired,
      leavePageNotFound: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    const { 
      actions: {
        enterPageNotFound
      } 
    } =  this.props;
    enterPageNotFound();
  }

  componentWillUnmount() {
    const { 
      actions: {
        leavePageNotFound
      }
    } = this.props;
    leavePageNotFound();
  }

  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-md-12">
            <h2>
              <i
                className="fa fa-frown-o"
                aria-hidden="true" 
              />
              &nbsp;
              Sorry... This page does not exist
            </h2>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default PageNotFound;
