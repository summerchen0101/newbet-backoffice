import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import { StoreType } from '@/store';
import { useStore } from 'react-redux';
import newsReducer, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, newsReducer);
  return (
    <Dashboard>
      <PageHeader />
      <TableData />
    </Dashboard>
  );
};

export default Component;
