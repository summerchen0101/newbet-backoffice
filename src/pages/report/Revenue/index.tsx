import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import YearPicker from './YearPicker';
import YearPeriodPicker from './YearPeriodPicker';
import SportSelector from './SportSelector';
import MonthlyRevenueTable from './MonthlyRevenueTable';
import GameResultTable from './GameResultTable';
import SearchSubmitBtn from './SearchSubmitBtn';
import PageSearchBar from '@/components/PageSearchBar';
import EmptyDivider from '@/components/EmptyDivider';
import { useStore } from 'react-redux';
import { StoreType } from '@/store';
import revenueReducer, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, revenueReducer);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <YearPicker />
        <YearPeriodPicker />
        <SportSelector />
        <SearchSubmitBtn />
      </PageSearchBar>
      <MonthlyRevenueTable />
      <EmptyDivider />
      <GameResultTable />
    </Dashboard>
  );
};

export default Component;
