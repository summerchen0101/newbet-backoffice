import produce from 'immer';
type State = {
  name: string;
};
export const state: State = {
  name: '',
};

export const reducer = (initState = state, action) =>
  produce(initState, (draft) => {
    if (action.type === 'UPDATE_USER_NAME') {
      draft.name = action.name;
    }
  });
