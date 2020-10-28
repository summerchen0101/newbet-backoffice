import { createSelector } from 'reselect';
import { AccountState } from './reducer';

const selectModuleState = (state: { account: AccountState }) => state.account;
const selectTableData = createSelector(
  selectModuleState,
  (account) => account.tableData,
);

export const selectKeyword = createSelector(
  selectModuleState,
  (account) => account.keyword,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectKeyword],
  (list, keyword) => {
    return list.filter((t) => !keyword || JSON.stringify(t).includes(keyword));
  },
);
