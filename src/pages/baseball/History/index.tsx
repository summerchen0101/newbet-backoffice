import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import DatePicker from './DatePicker';
import GameDropdown from './GameDropdown';
import TypeDropdown from './TypeDropdown';
import SearchSubmitBtn from './SearchSubmitBtn';
import SearchResetBtn from './SearchResetBtn';
import TableData from './TableData';
import PageSearchBar from '@/components/PageSearchBar';
import { StoreType } from '@/store';
import { useStore } from 'react-redux';
import baseballHistoryReducer, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, baseballHistoryReducer);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <DatePicker />
        <GameDropdown />
        <TypeDropdown />
        <SearchSubmitBtn />
        <SearchResetBtn />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default Component;
