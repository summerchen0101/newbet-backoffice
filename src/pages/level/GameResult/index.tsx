import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import ResultTypeDropdown from './ResultTypeDropdown';
import RankDropdown from './RankDropdown';
import DateRangePicker from './DateRangePicker';
import PageSearchBar from '@/components/PageSearchBar';
import { useDispatch } from 'react-redux';
import { initSearchState } from '@/store/manager/reducer';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
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

export default Component;
