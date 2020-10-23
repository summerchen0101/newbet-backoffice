import React from 'react';
import PageHeader from '@/components/PageHeader';

const routes = [
  {
    path: '/',
    breadcrumbName: '首頁',
  },
  {
    path: '',
    breadcrumbName: '帳號管理',
  },
  {
    path: '/account/manager',
    breadcrumbName: '管理員管理',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="管理員管理" breadcrumb={{ routes }} />;
};

export default Component;
