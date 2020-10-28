import React from 'react';
import PageHeader from '@/components/PageHeader';
import * as mPath from '@/lib/menuPath';

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
    breadcrumbName: '歷史比賽',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="歷史比賽" breadcrumb={{ routes }} />;
};

export default Component;
