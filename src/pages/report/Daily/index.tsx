import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import SportTable from './SportTable';
import { useDispatch } from 'react-redux';
import { initSearchState } from '@/store/manager';
import PageSearchBar from '@/components/PageSearchBar';
import TypeDropdown from './TypeDropdown';
import BallDropdown from './BallDropdown';
import CategoryDropdown from './CategoryDropdown';
import GameDropdown from './GameDropdown';
import PlayDropdown from './PlayDropdown';
import CheckGroup from './CheckGroup';
import LevelResultTable from './LevelResultTable';
import { Divider } from 'antd';
import EmptyDivider from '@/components/EmptyDivider';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <SportTable />
      <EmptyDivider />
      <PageSearchBar>
        <TypeDropdown />
        <BallDropdown />
        <CategoryDropdown />
        <GameDropdown />
        <PlayDropdown />
      </PageSearchBar>
      <PageSearchBar>
        <CheckGroup />
      </PageSearchBar>
      <LevelResultTable />
    </Dashboard>
  );
};

export default Component;
