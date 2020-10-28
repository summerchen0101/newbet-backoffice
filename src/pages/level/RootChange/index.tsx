import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import StatusTabs from './StatusTabs';
import { StoreType } from '@/store';
import { useStore } from 'react-redux';
import rootChangeReducer, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, rootChangeReducer);
  return (
    <Dashboard>
      <PageHeader />
      <StatusTabs />
    </Dashboard>
  );
};

export default Component;
