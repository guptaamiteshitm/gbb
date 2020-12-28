import { Card, Tabs } from 'antd';
import React from 'react';
import ListViewSecond from './components/listViewSecond';
import CalenderView from './components/calenderView';

const { TabPane } = Tabs;
function Index() {
  return (
    <div>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span>List View</span>} key="1">
            <ListViewSecond />
          </TabPane>
          <TabPane tab={<span>Calender View</span>} key="2">
            <CalenderView />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default Index;
