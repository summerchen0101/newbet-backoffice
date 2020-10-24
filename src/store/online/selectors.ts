import { RootState } from '@/store';
import { createSelector } from 'reselect';

const selectModuleState = (state: RootState) => state.online;
const selectTableData = createSelector(
  selectModuleState,
  (online) => online.tableData,
);
export const selectRoleSearch = createSelector(
  selectModuleState,
  (online) => online.searchRole,
);
export const selectRoleOptions = createSelector(
  selectModuleState,
  (online) => online.roleOptions,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectRoleSearch],
  (originList, role) => {
    return originList.filter((t) => !role || t.roleValue === role);
  },
);
