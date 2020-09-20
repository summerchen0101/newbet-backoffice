import * as actionType from '../constants';
import produce from 'immer';

export interface IInitialState {
  counter: number;
}

const initialState: IInitialState = {
  counter: 200,
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.ADD_COUNTER:
        draft.counter += action.value;
        break;
      case actionType.SUB_COUNTER:
        draft.counter -= action.value;
        break;
    }
  });
