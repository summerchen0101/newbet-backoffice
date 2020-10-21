import React from 'react'
import Dashboard from '@/components/Dashboard'
import PageSearchBar from '@/components/PageSearchBar'
import TableData from './TableData'
import RoleDropdown from './RoleDropdown'
import PageHeader from './PageHeader'

const Component: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader  />
      <PageSearchBar>
        <RoleDropdown />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  )
}

export default Component
