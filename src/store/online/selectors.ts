import { RootState } from '@/store';
import { createSelector } from 'reselect';

const selectOnline = (state: RootState) => state.online;
const selectTableData = createSelector(
  selectOnline,
  (online) => online.tableData,
);
export const selectRoleSearch = createSelector(
  selectOnline,
  (online) => online.searchRole,
);
export const selectRoleOptions = createSelector(
  selectOnline,
  (online) => online.roleOptions,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectRoleSearch],
  (originList, role) => {
    return originList.filter((t) => !role || t.roleValue === role);
  },
);
