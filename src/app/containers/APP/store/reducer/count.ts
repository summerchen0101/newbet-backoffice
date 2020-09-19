import * as actionType from '../constants';
import produce from 'immer';

export interface IInitialState {
  counter: number;
}

const initialState: IInitialState = {
  counter: 200,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return produce(state, (draftSate) => {
        draftSate.counter += action.value;
      });
    case actionType.SUB_COUNTER:
      return produce(state, (draftSate) => {
        draftSate.counter -= action.value;
      });
  }
  return state;
}
