import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import { useDispatch } from 'react-redux';
import { initSearchState } from '@/store/manager';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
    </Dashboard>
  );
};

export default Component;
