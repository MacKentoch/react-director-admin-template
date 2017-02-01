import React, {
  PropTypes,
  Component
}                         from 'react';
import {
  AnimatedView,
  Panel,
  Stat as StatComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class Stat extends Component {
  componentWillMount() {
    const { actions: { enterStat } } = this.props;
    enterStat();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveStat } } = this.props;
    leaveStat();
  }

  render() {
    const source = `
      // import
      import { Stat } from './_SOMEWHERE_/components';

      // in render():
      <div className="row">
        <div className="col-md-2">
          <Stat
            statFaIconName="fa-file-o"
            statIconColor="#fa8564"
            statLabel="999 Projects"
          />
        </div>
        <div className="col-md-2">
          <Stat
            statFaIconName="fa-paperclip"
            statIconColor="#45cf95"
            statLabel="999 Documents"
          />
        </div>
        <div className="col-md-2">
          <Stat
            statFaIconName="fa-envelope-o"
            statIconColor="#AC75F0"
            statLabel="999 Messages"
          />
        </div>
        <div className="col-md-2">
          <Stat
            statFaIconName="fa-check-square-o"
            statIconColor="#45cf95"
            statLabel="1000 Tasks"
          />
        </div>
        <div className="col-md-2">
          <Stat
            statFaIconName="fa-dollar"
            statIconColor="#AC75F0"
            statLabel="$99999 Earnings"
          />
        </div>
        <div className="col-md-2">
          <Stat
            statFaIconName="fa-refresh"
            statIconColor="#fa8564"
            statIconSpin={true}
            statLabel="Processing...."
          />
        </div>
      </div>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Stat"
              hasTitle={true}
              bodyBackGndColor={'#F4F5F6'}>

              <div className="row">
                <div className="col-md-2">
                  <StatComponent
                    statFaIconName="fa-file-o"
                    statIconColor="#fa8564"
                    statLabel="999 Projects"
                  />
                </div>
                <div className="col-md-2">
                  <StatComponent
                    statFaIconName="fa-paperclip"
                    statIconColor="#45cf95"
                    statLabel="999 Documents"
                  />
                </div>
                <div className="col-md-2">
                  <StatComponent
                    statFaIconName="fa-envelope-o"
                    statIconColor="#AC75F0"
                    statLabel="999 Messages"
                  />
                </div>
                <div className="col-md-2">
                  <StatComponent
                    statFaIconName="fa-check-square-o"
                    statIconColor="#45cf95"
                    statLabel="1000 Tasks"
                  />
                </div>
                <div className="col-md-2">
                  <StatComponent
                    statFaIconName="fa-dollar"
                    statIconColor="#AC75F0"
                    statLabel="$99999 Earnings"
                  />
                </div>
                <div className="col-md-2">
                  <StatComponent
                    statFaIconName="fa-refresh"
                    statIconColor="#fa8564"
                    statIconSpin={true}
                    statLabel="Processing...."
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

Stat.propTypes= {
  actions: PropTypes.shape({
    enterStat: PropTypes.func.isRequired,
    leaveStat: PropTypes.func.isRequired
  })
};

export default Stat;
