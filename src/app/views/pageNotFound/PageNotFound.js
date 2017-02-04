import React, {
  PropTypes,
  Component
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';
import AnimatedView     from '../../components/animatedView/AnimatedView';


class PageNotFound extends Component {

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterPageNotFound();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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

PageNotFound.propTypes = {
  actions: PropTypes.shape({
    enterPageNotFound: PropTypes.func.isRequired,
    leavePageNotFound: PropTypes.func.isRequired
  })
};

export default PageNotFound;
