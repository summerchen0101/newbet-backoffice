import { RootState } from 'app/store';
import { createSelector } from 'reselect';

const selectStyleState = (state: RootState) => state.style;

const makeSelectTheme = () =>
  createSelector(selectStyleState, (styleState) => styleState.theme);

export { selectStyleState, makeSelectTheme };
