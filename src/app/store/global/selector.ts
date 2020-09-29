import { RootState } from 'app/store';
import { createSelector } from 'reselect';

const selectGlobalState = (state: RootState) => state.global;

const makeSelectUser = () =>
  createSelector(selectGlobalState, (globalState) => globalState.user);
const selectUserList = createSelector(
  selectGlobalState,
  (globalState) => globalState.users,
);
createSelector(selectGlobalState, (globalState) => globalState.users);

export { selectGlobalState, makeSelectUser, selectUserList };
