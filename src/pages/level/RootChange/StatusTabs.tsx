import { Switch, Tabs } from 'antd';
import React from 'react';
import TableData from './TableData';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const statusTabs = [
  { label: '申請中', key: 'applying' },
  { label: '成功', key: 'success' },
  { label: '取消', key: 'cancel' },
];

const Component: React.FC = () => (
  <Tabs defaultActiveKey="applying" onChange={callback}>
    {statusTabs.map(({ label, key }) => (
      <TabPane tab={label} key={key}>
        <TableData type={key} />
      </TabPane>
    ))}
  </Tabs>
);

export default Component;
