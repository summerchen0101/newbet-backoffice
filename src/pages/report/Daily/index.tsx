import React from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import SportTable from './SportTable';
import { useStore } from 'react-redux';
import PageSearchBar from '@/components/PageSearchBar';
import TypeDropdown from './TypeDropdown';
import BallDropdown from './BallDropdown';
import CategoryDropdown from './CategoryDropdown';
import GameDropdown from './GameDropdown';
import PlayDropdown from './PlayDropdown';
import CheckGroup from './CheckGroup';
import LevelResultTable from './LevelResultTable';
import EmptyDivider from '@/components/EmptyDivider';
import { StoreType } from '@/store';
import dailyReportReducer, { moduleName } from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer(moduleName, dailyReportReducer);
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
