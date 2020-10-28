import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import { StoreType } from '@/store';
import { useStore } from 'react-redux';
import AccountingReducer, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, AccountingReducer);
  return (
    <Dashboard>
      <PageHeader />
    </Dashboard>
  );
};

export default Component;
