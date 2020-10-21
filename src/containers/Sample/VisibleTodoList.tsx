import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '@/store/sample/actions';
import TodoList from '@/components/Sample/TodoList';
import { VisibilityFilters } from '@/store/sample/actions';
import React from 'react';
import { RootState } from '@/store';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const VisibleTodoList: React.FC = (props) => {
  const todos = useSelector((state: RootState) => state.sample.todos);
  const visibilityFilter = useSelector(
    (state: RootState) => state.sample.visibilityFilter,
  );
  const filteredTodos = getVisibleTodos(todos, visibilityFilter);
  const dispatch = useDispatch();

  return (
    <TodoList
      {...props}
      todos={filteredTodos}
      toggleTodo={(id) => dispatch(toggleTodo(id))}
    />
  );
};

export default VisibleTodoList;
