import React, { useReducer } from 'react'
import Dashboard from '@/components/Dashboard'
import {Space} from 'antd'
import PageHeader from '@/components/PageHeader'
import TableData from './container/TableData'
import RoleSelector from './container/RoleSelector'
import StatusSelector from './container/StatusSelector'
import KeywordInput from './container/KeywordInput'

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
    path: '/account/manager',
    breadcrumbName: '管理員管理',
  },
];


const Component: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader title="管理員管理" breadcrumb={{ routes }} />
      <Space size="small" style={{marginBottom: 20}}>
        <RoleSelector />
        <StatusSelector />
        <KeywordInput />
      </Space>
      <TableData />
    </Dashboard>
  )
}

export default Component
