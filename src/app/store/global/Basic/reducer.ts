// import * as actionType from './User/constants';
import produce from 'immer';
import { BasicState } from './types';

const basicState: BasicState = {
  todos: [],
  breadcrumb: ['Master', 'Agency'],
  loggedIn: true,
};

const basicReducer = (state = basicState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.todos.push({ title: action.title, finished: false });
        break;
      case 'CLEAR_TODO':
        draft.todos = [];
        break;

      default:
        break;
    }
  });

export default basicReducer;
