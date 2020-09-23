import * as actionType from '../constants';
import produce from 'immer';

type TLocalesMessages = Record<string, Record<string, string>>;

export const localesMessages = {
  en: require('app/lib/locales/en.json'),
  zh: require('app/lib/locales/zh.json'),
};

export const localeOptions = Object.keys(localesMessages);
export interface IState {
  locale: string;
  localesMessages: TLocalesMessages;
}

const initialState: IState = {
  locale: 'en',
  localesMessages,
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    //
  });
