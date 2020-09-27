import { RootState } from 'app/store';
import { createSelector } from 'reselect';

const selectGlobalState = (state: RootState) => state.global;

const makeSelectUser = () =>
  createSelector(selectGlobalState, (globalState) => globalState.user);

export { selectGlobalState, makeSelectUser };
