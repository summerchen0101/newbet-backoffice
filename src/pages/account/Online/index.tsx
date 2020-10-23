import React, { useEffect } from 'react';
import Dashboard from '@/components/Dashboard';
import PageSearchBar from '@/components/PageSearchBar';
import TableData from './TableData';
import RoleDropdown from './RoleDropdown';
import PageHeader from './PageHeader';
import { useDispatch } from 'react-redux';
import { initSearchState } from '@/store/online/reducer';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState);
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <RoleDropdown />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default Component;
