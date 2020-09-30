import React from 'react';
import produce from 'immer';

type ActionType = {
  type: string;
  [s: string]: any;
};

export const initState = {
  user: { name: '' },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mutate: (action: ActionType) => {},
};
export const CustomStore = React.createContext(initState);

export const rootReducer = (state: typeof initState, action) =>
  produce(state, (draft) => {
    if (action.type === 'UPDATE_USER_NAME') {
      draft.user.name = action.name;
    }
  });
