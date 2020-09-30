import { createSelector } from 'reselect';

const selectTodoState = (store) => store.todos;
const selectTodoList = createSelector(selectTodoState, (state) => state.list);
const selectIndexProps = (_, props) => props.index;
export const selectIndexTodo = createSelector(
  [selectTodoList, selectIndexProps],
  (todos, index) => todos[index],
);
