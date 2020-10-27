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
    breadcrumbName: '棒球',
  },
  {
    path: mPath.LEVEL_ACCOUNT,
    breadcrumbName: '過關',
  },
];

const Component: React.FC = () => {
  return (
    <PageHeader
      title="過關(棒球)"
      breadcrumb={{ routes }}
      extra={[
        <Button key="1" size="small">
          重新整理 <SyncOutlined />
          (60 秒後)
        </Button>,
      ]}
    />
  );
};

export default Component;
