import React from 'react';
import { Button, Space } from 'antd';

const PageSearchBar: React.FC = (props) => {
  return (
    <Space size="small" {...props}>
      <Button type="primary">昨天</Button>
      <Button type="primary">今天</Button>
      <Button type="primary">明天</Button>
      <Button type="primary">上週</Button>
      <Button type="primary">本週</Button>
      <Button type="primary">上月</Button>
      <Button type="primary">本月</Button>
    </Space>
  );
};

export default PageSearchBar;
