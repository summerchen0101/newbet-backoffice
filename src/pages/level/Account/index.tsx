import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import LevelBreadcrumb from './LevelBreadcrumb';
import KeywordInput from './KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';
import { useDispatch } from 'react-redux';
import { initSearchState } from '@/pages/account/Manager/reducer';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <KeywordInput />
      </PageSearchBar>
      <LevelBreadcrumb />
      <TableData />
    </Dashboard>
  );
};

export default Component;
