import React from 'react'
import Footer from './Sample/Footer'
import AddTodo from '@/containers/Sample/AddTodo'
import VisibleTodoList from '@/containers/Sample/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
