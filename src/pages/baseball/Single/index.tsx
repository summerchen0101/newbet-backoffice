import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import GameDropdown from './GameDropdown';
import TypeDropdown from './TypeDropdown';
import SearchSubmitBtn from './SearchSubmitBtn';
import SearchResetBtn from './SearchResetBtn';
import TableData from './TableData';
import { useDispatch } from 'react-redux';
import { initSearchState } from '@/pages/account/Manager/reducer';
import PageSearchBar from '@/components/PageSearchBar';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
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
