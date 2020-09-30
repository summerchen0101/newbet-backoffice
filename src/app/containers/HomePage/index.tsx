import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from 'app/store/global/selector';
const Component: React.FC = (props) => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const handleAddedTodo = () => {
    dispatch({ type: 'ADD_TODO', title: inputEl.current.value });
    inputEl.current.value = '';
  };
  const handleClear = () => dispatch({ type: 'CLEAR_TODO' });
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleAddedTodo}>ADD TODO</button>
      <button onClick={handleClear}>CLEAR</button>
      {todos.map((t, i) => (
        <h3 key={i}>{t.title}</h3>
      ))}
    </>
  );
};

export default Component;
