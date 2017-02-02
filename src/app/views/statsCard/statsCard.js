import React, {
  PropTypes,
  Component
}                         from 'react';
import {
  AnimatedView,
  Panel,
  StatsCard as StatsCardComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class StatsCard extends Component {
  componentWillMount() {
    const { actions: { enterStatsCard } } = this.props;
    enterStatsCard();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveStatsCard } } = this.props;
    leaveStatsCard();
  }

  render() {
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
      <AnimatedView>
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
      </AnimatedView>
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
