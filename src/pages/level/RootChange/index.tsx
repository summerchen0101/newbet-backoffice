import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import StatusTabs from './StatusTabs';

const Component: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <StatusTabs />
    </Dashboard>
  );
};

export default Component;
