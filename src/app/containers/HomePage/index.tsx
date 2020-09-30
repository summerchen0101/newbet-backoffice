import React, { useEffect, useContext, useReducer, useRef } from 'react';
import { CustomStore } from 'app/customStore';
const Component: React.FC = (props) => {
  const { store, mutate } = useContext(CustomStore);
  const inputEl = useRef(null);
  const handleAddedTodo = () => {
    mutate({ type: 'ADD_TODO', title: inputEl.current.value });
    inputEl.current.value = '';
  };
  const handleClear = () => mutate({ type: 'CLEAR_TODO' });
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleAddedTodo}>ADD TODO</button>
      <button onClick={handleClear}>CLEAR</button>
      {store.todos.list.map((t, i) => (
        <h3 key={i}>{t.title}</h3>
      ))}
      {/* <h1>{user.name}</h1>
      <input
        onBlur={(e) =>
          mutate({ type: 'UPDATE_USER_NAME', name: e.target.value })
        }
        type="text"
      /> */}
    </>
  );
};

export default Component;
