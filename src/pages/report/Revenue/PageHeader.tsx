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
    breadcrumbName: '查詢報表',
  },
  {
    path: mPath.LEVEL_ACCOUNT,
    breadcrumbName: '營收查詢',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="營收查詢" breadcrumb={{ routes }} />;
};

export default Component;
