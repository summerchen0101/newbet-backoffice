import React from 'react';
import PageHeader from '@/components/PageHeader';
import * as mPath from '@/lib/menuPath';
import { Button } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const routes = [
  {
    path: '/',
    breadcrumbName: '首頁',
  },
  {
    path: '',
    breadcrumbName: '查詢報表',
  },
  {
    path: mPath.LEVEL_ACCOUNT,
    breadcrumbName: '當日報表',
  },
];

const Component: React.FC = () => {
  return (
    <PageHeader
      title="當日報表"
      breadcrumb={{ routes }}
      extra={[
        <Button key="1" size="small">
          重新整理 <SyncOutlined />
        </Button>,
      ]}
    />
  );
};

export default Component;
