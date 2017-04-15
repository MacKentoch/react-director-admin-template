import React from 'react';
import TabPanel from './tabPanel/TabPanel';
import TabPanelHeader from './tabPanelHeader/TabPanelHeader';
import TabPanelBody from './tabPanelBody/TabPanelBody';
import TabPanelBodyContent from './tabPanelBodyContent/TabPanelBodyContent';

const mockHeader = [
  {name: 'Home', tablink: 'home', isActive: true},
  {name: 'About', tablink: 'about', isActive: false},
  {name: 'Profile', tablink: 'profile', isActive: false},
  {name: 'Contact', tablink: 'contact', isActive: false}
];

const TabPanelDemo = () => {
  return (
    <TabPanel>
      <TabPanelHeader tabItems={mockHeader}/>
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
  );
};

TabPanelDemo.propTypes = {

};

export default TabPanelDemo;
