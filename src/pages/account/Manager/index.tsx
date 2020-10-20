import React, { useReducer } from 'react'
import Dashboard from '@/components/Dashboard'

import PageHeader from '@/components/PageHeader'
import managerContext from './context'
import TableData from './container/TableData'
import RoleSelector from './container/RoleSelector'
import reducer, {initState} from './reducer'

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
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <managerContext.Provider value={{state, dispatch}}>
      <Dashboard>
        <PageHeader title="管理員管理" breadcrumb={{ routes }} />
        <RoleSelector />
        <TableData />
      </Dashboard>
    </managerContext.Provider>
  )
}

export default Component
