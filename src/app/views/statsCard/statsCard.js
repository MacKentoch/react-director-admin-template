import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  StatsCard as StatsCardComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class StatsCard extends Component {

  state = {
    animated: true,
    viewEnters: false
  };

  componentWillMount() {
    const { actions: { enterStatsCard } } = this.props;
    enterStatsCard();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      () => this.setState({viewEnters: true}),
      500
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveStatsCard } } = this.props;
    leaveStatsCard();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const {} = this.props;
    const { animated, viewEnters } = this.state;

    const source = `
      // import
      import { StatsCard } from './_SOMEWHERE_/components';

      // in render():
      <div className="col-md-3">
        <StatsCard
          statValue={'3200'}
          statLabel={'Total Tasks'}
          icon={<i className="fa fa-check-square-o"></i>}
          backColor={'red'}
        />
      </div>
      <div className="col-md-3">
        <StatsCard
          statValue={'2200'}
          statLabel={'Total Messages'}
          icon={<i className="fa fa-envelope-o"></i>}
          backColor={'violet'}
        />
      </div>
      <div className="col-md-3">
        <StatsCard
          statValue={'100,320'}
          statLabel={'Total Profit'}
          icon={<i className="fa fa-dollar"></i>}
          backColor={'blue'}
        />
      </div>
      <div className="col-md-3">
        <StatsCard
          statValue={'4567'}
          statLabel={'Total Documents'}
          icon={<i className="fa fa-paperclip"></i>}
          backColor={'green'}
        />
      </div>`;

    return(
      <section className={
        cx({
          'content':       true,
          'animatedViews': animated,
          'invisible':     !viewEnters,
          'view-enter':    viewEnters
        })
      }>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Stats cards"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}>
            <div className="row">
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'3200'}
                  statLabel={'Total Tasks'}
                  icon={<i className="fa fa-check-square-o"></i>}
                  backColor={'red'}
                />
              </div>
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'2200'}
                  statLabel={'Total Messages'}
                  icon={<i className="fa fa-envelope-o"></i>}
                  backColor={'violet'}
                />
              </div>
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'100,320'}
                  statLabel={'Total Profit'}
                  icon={<i className="fa fa-dollar"></i>}
                  backColor={'blue'}
                />
              </div>
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'4567'}
                  statLabel={'Total Documents'}
                  icon={<i className="fa fa-paperclip"></i>}
                  backColor={'green'}
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
      </section>
    );
  }
}

StatsCard.propTypes= {
  actions: PropTypes.shape({
    enterStatsCard: PropTypes.func.isRequired,
    leaveStatsCard: PropTypes.func.isRequired
  })
};

export default StatsCard;
