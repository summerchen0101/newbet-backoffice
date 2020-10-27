import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import TableData from './TableData';
import RoleDropdown from './RoleDropdown';
import StatusDropdown from './StatusDropdown';
import KeywordInput from './KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';
import { useDispatch, useStore } from 'react-redux';
import managerReducer, { initSearchState } from './reducer';
import CreateModal from './CreateModal';
import { StoreType } from '@/store';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer('manager', managerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <RoleDropdown />
        <StatusDropdown />
        <KeywordInput />
      </PageSearchBar>
      <TableData />
      <CreateModal />
    </Dashboard>
  );
};

export default Component;
