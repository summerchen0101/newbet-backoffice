import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import GameDropdown from './GameDropdown';
import TypeDropdown from './TypeDropdown';
import SearchSubmitBtn from './SearchSubmitBtn';
import SearchResetBtn from './SearchResetBtn';
import TableData from './TableData';
import PageSearchBar from '@/components/PageSearchBar';
import { StoreType } from '@/store';
import { useStore } from 'react-redux';
import baseballMultiple, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, baseballMultiple);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
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
