import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import KeywordInput from './KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';

const Component: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <KeywordInput />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default Component;
