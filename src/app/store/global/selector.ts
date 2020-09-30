import { RootState } from 'app/store';
import { createSelector } from 'reselect';

const selectGlobalState = (state: RootState) => state.global;

export const selectMenu = createSelector(
  selectGlobalState,
  (state) => state.menuStore.menu,
);
export const selectLoggedIn = createSelector(
  selectGlobalState,
  (state) => state.basic.loggedIn,
);
export const selectBreadcrumb = createSelector(
  selectGlobalState,
  (state) => state.basic.breadcrumb,
);
export const selectTodos = createSelector(
  selectGlobalState,
  (state) => state.basic.todos,
);

const makeSelectUser = () =>
  createSelector(selectGlobalState, (state) => state.userStore.user);

const selectUserList = createSelector(
  selectGlobalState,
  (state) => state.userStore.users,
);

export { selectGlobalState, makeSelectUser, selectUserList };
