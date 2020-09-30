import { createSelector } from 'reselect';

const selectUser = (store) => store.user;
export const selectUserName = createSelector(selectUser, (user) => user.name);
