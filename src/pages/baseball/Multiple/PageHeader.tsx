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
    breadcrumbName: '過關',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="過關" breadcrumb={{ routes }} />;
};

export default Component;
