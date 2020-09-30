import { RootState } from 'app/store';
import { createSelector } from 'reselect';

const selectGlobalState = (state: RootState) => state.global;

export const selectMenu = createSelector(
  selectGlobalState,
  (state) => state.menu,
);
export const selectBreadcrumb = createSelector(
  selectGlobalState,
  (state) => state.breadcrumb,
);

const makeSelectUser = () =>
  createSelector(selectGlobalState, (globalState) => globalState.user);

const selectUserList = createSelector(
  selectGlobalState,
  (globalState) => globalState.users,
);
createSelector(selectGlobalState, (globalState) => globalState.users);

export { selectGlobalState, makeSelectUser, selectUserList };
