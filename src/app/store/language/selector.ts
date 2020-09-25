import { RootState } from 'app/store';
import { createSelector } from 'reselect';

const selectLangState = (state: RootState) => state.lang;

const makeSelectLocale = () =>
  createSelector(selectLangState, (langState) => langState.locale);

export { selectLangState, makeSelectLocale };
