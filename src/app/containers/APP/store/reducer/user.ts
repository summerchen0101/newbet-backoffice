import * as actionType from '../constants';
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
      state = {
        ...state,
        user: {
          name: action.user.name,
          email: action.user.email,
        },
      };
  }
  return state;
}
