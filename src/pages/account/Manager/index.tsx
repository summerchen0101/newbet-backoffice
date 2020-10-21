import React, { useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import { Space } from 'antd';
import PageHeader from './PageHeader';
import TableData from './TableData';
import RoleDropdown from './RoleDropdown';
import StatusDropdown from './StatusDropdown';
import KeywordInput from './KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';

const Component: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <RoleDropdown />
        <StatusDropdown />
        <KeywordInput />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default Component;
