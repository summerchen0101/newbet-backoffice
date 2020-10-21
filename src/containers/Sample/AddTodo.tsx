import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '@/store/sample/actions';

const AddTodo: React.FC = () => {
  let input;
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
