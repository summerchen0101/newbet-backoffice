import React from 'react'
import Footer from '@/components/Sample/Footer'
import AddTodo from '@/containers/Sample/AddTodo'
import VisibleTodoList from '@/containers/Sample/VisibleTodoList'

const Component: React.FC = () => (
  <>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
)

export default Component
