import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './PageHeader';
import SportTable from './SportTable';
import DateRangePicker from './DateRangePicker';
import SearchForm from './SearchForm';
import PageSearchBar from '@/components/PageSearchBar';
import EmptyDivider from '@/components/EmptyDivider';
import RelativeDateBtns from '@/components/RelativeDateBtns';

const Component: React.FC = () => {
  return (
    <Dashboard>
      <PageHeader />
      <SportTable />
      <EmptyDivider />
      <PageSearchBar>
        <DateRangePicker />
        <RelativeDateBtns />
      </PageSearchBar>
      <SearchForm />
    </Dashboard>
  );
};

export default Component;
