import * as actionType from './constants';
import produce from 'immer';

export const themeOptions = ['summer', 'sweet'];

export interface IState {
  theme: string;
}

const initialState: IState = {
  theme: 'summer',
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.CHANGE_THEME:
        draft.theme = action.payload;
        break;

      default:
        break;
    }
  });
