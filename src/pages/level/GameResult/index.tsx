import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import ResultTypeDropdown from './ResultTypeDropdown';
import RankDropdown from './RankDropdown';
import DateRangePicker from './DateRangePicker';
import PageSearchBar from '@/components/PageSearchBar';
import { useStore } from 'react-redux';
import { StoreType } from '@/store';
import gameResultReducer, { moduleName } from './reducer';

const GameResultPage: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, gameResultReducer);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <DateRangePicker />
        <ResultTypeDropdown />
        <RankDropdown />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default GameResultPage;
