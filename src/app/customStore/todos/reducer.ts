import produce from 'immer';
type State = {
  list: any[];
};
export const state: State = {
  list: [],
};

export const reducer = (initState = state, action) =>
  produce(initState, (draft) => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.list.push({ title: action.title, finished: false });
        break;
      case 'CLEAR_TODO':
        draft.list = [];
        break;

      default:
        break;
    }
  });
