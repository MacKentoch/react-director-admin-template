import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
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
    animated: true,
    viewEnters: false,
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
    const { actions: { leaveTabPanel } } = this.props;
    leaveTabPanel();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { animated, viewEnters, mockHeader } = this.state;

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
        <div className="col-xs-6 col-xs-offset-3">
          <Panel
            title="TabPanel"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}>
            <TabPanelComponent>
              <TabPanelHeaderComponent tabItems={mockHeader}/>
              <TabPanelBodyComponent>
                <TabPanelBodyContentComponent id="home">
                  &nbsp;Home
                </TabPanelBodyContentComponent>
                <TabPanelBodyContentComponent id="about">
                  &nbsp;About
                </TabPanelBodyContentComponent>
                <TabPanelBodyContentComponent id="profile">
                  &nbsp;Profile
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
      </section>
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
