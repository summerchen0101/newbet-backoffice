import * as actionType from './constants';
import produce from 'immer';
import { StyleState } from './types';

export const themeOptions = ['summer', 'sweet'];

const initialState: StyleState = {
  theme: 'summer',
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.CHANGE_THEME:
        draft.theme = action.theme;
        break;

      default:
        break;
    }
  });
