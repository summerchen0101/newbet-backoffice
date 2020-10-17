import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

type TodoType = {
  id: number;
  completed: boolean;
  text: string;
}
type Props = {
  todos: TodoType[],
  toggleTodo: (id: number) => any
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
