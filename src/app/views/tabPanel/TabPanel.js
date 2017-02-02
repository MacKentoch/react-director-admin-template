import React, {
  PropTypes,
  Component
}                         from 'react';
import {
  AnimatedView,
  Panel,
  TabPanel as TabPanelComponent,
  TabPanelHeader as TabPanelHeaderComponent,
  TabPanelBody as TabPanelBodyComponent,
  TabPanelBodyContent as TabPanelBodyContentComponent
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class TabPanel extends Component {

  state = {
    mockHeader: [
      {name: 'Home', tablink: 'home', isActive: true},
      {name: 'About', tablink: 'about', isActive: false},
      {name: 'Profile', tablink: 'profile', isActive: false},
      {name: 'Contact', tablink: 'contact', isActive: false}
    ]
  };

  componentWillMount() {
    const { actions: { enterTabPanel } } = this.props;
    enterTabPanel();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveTabPanel } } = this.props;
    leaveTabPanel();
  }

  render() {
    const { mockHeader } = this.state;

    const source = `
      // import
      import {
        TabPanel,
        TabPanelHeader,
        TabPanelBody,
        TabPanelBodyContent
      } from './_SOMEWHERE_/components';

      // tab headers (in state for example):
      state = {
        headers: [
          {name: 'Home', tablink: 'home', isActive: true},
          {name: 'About', tablink: 'about', isActive: false},
          {name: 'Profile', tablink: 'profile', isActive: false},
          {name: 'Contact', tablink: 'contact', isActive: false}
        ]
      };

      // in render():
        <TabPanel>
          <TabPanelHeader tabItems={this.state.headers}/>
          <TabPanelBody>
            <TabPanelBodyContent id="home">
              &nbsp;Home
            </TabPanelBodyContent>
            <TabPanelBodyContent id="about">
              &nbsp;About
            </TabPanelBodyContent>
            <TabPanelBodyContent id="profile">
              &nbsp;Profile
            </TabPanelBodyContent>
          </TabPanelBody>
        </TabPanel>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <Panel
              title="TabPanel"
              hasTitle={true}
              bodyBackGndColor={'#F4F5F6'}>
              <TabPanelComponent>
                <TabPanelHeaderComponent tabItems={mockHeader}/>
                <TabPanelBodyComponent>
                  <TabPanelBodyContentComponent id="home" isActive>
                    <h3>
                      Home
                    </h3>
                  </TabPanelBodyContentComponent>
                  <TabPanelBodyContentComponent id="about">
                    <h3>
                      About
                    </h3>
                  </TabPanelBodyContentComponent>
                  <TabPanelBodyContentComponent id="profile">
                    <h3>
                      Profile
                    </h3>
                  </TabPanelBodyContentComponent>
                </TabPanelBodyComponent>
              </TabPanelComponent>
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

TabPanel.propTypes= {
  actions: PropTypes.shape({
    enterTabPanel: PropTypes.func.isRequired,
    leaveTabPanel: PropTypes.func.isRequired
  })
};

export default TabPanel;
