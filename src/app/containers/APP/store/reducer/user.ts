import * as actionType from '../constants';
import produce from 'immer';
type IUser = {
  name: string;
  email: string;
};
type IState = {
  user: IUser | null;
};

const initialState: IState = {
  user: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.USER_FETCH_SUCCESS:
      return produce(state, (draftState) => {
        draftState.user.name = action.user.name;
        draftState.user.email = action.user.email;
      });
  }
  return state;
}
