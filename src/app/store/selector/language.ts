import { RootState } from 'app/store';
import { createSelector, createStructuredSelector } from 'reselect';

const selectLangState = (state: RootState) => state.lang;

const makeSelectLocalesMessages = () =>
  createSelector(selectLangState, (langState) => langState.localesMessages);

const makeSelectLocale = () =>
  createSelector(selectLangState, (langState) => langState.locale);

const makeSelectMessages = () =>
  createSelector(
    [makeSelectLocalesMessages(), makeSelectLocale()],
    (localesMsgs, locale) => localesMsgs[locale],
  );

export {
  selectLangState,
  makeSelectLocalesMessages,
  makeSelectLocale,
  makeSelectMessages,
};
