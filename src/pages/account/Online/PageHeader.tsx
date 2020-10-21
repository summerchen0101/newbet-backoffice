import React from 'react'
import PageHeader from '@/components/PageHeader'

const routes = [
  {
    path: '/home',
    breadcrumbName: '首頁',
  },
  {
    path: '',
    breadcrumbName: '帳號管理',
  },
  {
    path: '/account/online',
    breadcrumbName: '在線人員',
  },
];


const Component: React.FC = () => {
  return (
    <PageHeader title="在線人員" breadcrumb={{ routes }} />
  )
}

export default Component
