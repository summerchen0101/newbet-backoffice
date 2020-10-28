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
    breadcrumbName: '層級管理',
  },
  {
    path: mPath.LEVEL_ACCOUNT,
    breadcrumbName: '移桶審核',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="移桶審核" breadcrumb={{ routes }} />;
};

export default Component;
