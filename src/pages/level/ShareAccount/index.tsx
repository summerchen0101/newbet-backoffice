import React, { useEffect } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import KeywordInput from './KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';
import { useStore } from 'react-redux';
import { StoreType } from '@/store';
import shareAccountReducer from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer('shareAccount', shareAccountReducer);
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
