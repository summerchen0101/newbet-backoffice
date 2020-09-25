import * as actionType from './constants';
import produce from 'immer';

export const localesMessages = {
  en: require('app/lib/locales/en.json'),
  zh: require('app/lib/locales/zh.json'),
};

export const localeOptions = Object.keys(localesMessages);
export interface IState {
  locale: string;
}

const initialState: IState = {
  locale: 'en',
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.CHANGE_LANGUAGE:
        draft.locale = action.lang;
        break;

      default:
        break;
    }
  });
