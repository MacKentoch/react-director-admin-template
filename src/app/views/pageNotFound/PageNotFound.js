import React, {
  PropTypes,
  PureComponent
}                       from 'react';
import AnimatedView     from '../../components/animatedView/AnimatedView';


class PageNotFound extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterPageNotFound: PropTypes.func.isRequired,
      leavePageNotFound: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterPageNotFound();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leavePageNotFound();
  }

  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-md-12">
            <h2>
              <i
                className="fa fa-frown-o"
                aria-hidden="true">
              </i>
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
