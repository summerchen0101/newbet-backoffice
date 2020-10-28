import React from 'react';
import PageHeader from '@/components/PageHeader';

const routes = [
  {
    path: '/',
    breadcrumbName: '首頁',
  },
  {
    path: '/news',
    breadcrumbName: '公告',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="公告" breadcrumb={{ routes }} />;
};

export default Component;
