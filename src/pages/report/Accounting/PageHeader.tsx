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
    breadcrumbName: '帳務紀錄',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="帳務紀錄" breadcrumb={{ routes }} />;
};

export default Component;
