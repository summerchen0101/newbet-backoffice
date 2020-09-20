import * as actionType from '../constants';
import produce from 'immer';
const initialState = {
  user: null,
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.USER_FETCH_SUCCESS:
        draft.user = action.user;
        break;
    }
  });
