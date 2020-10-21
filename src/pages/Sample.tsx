import React from 'react';
import Footer from '@/components/Sample/Footer';
import AddTodo from '@/containers/Sample/AddTodo';
import VisibleTodoList from '@/containers/Sample/VisibleTodoList';
import Dashboard from '@/components/Dashboard';

const Component: React.FC = () => (
  <Dashboard>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Dashboard>
);

export default Component;
