import { createSelector } from 'reselect';
import { ShareAccountState } from './reducer';
const selectModuleState = (state: { shareAccount: ShareAccountState }) =>
  state.shareAccount;
const selectTableData = createSelector(
  selectModuleState,
  (shareAccount) => shareAccount.tableData,
);
export const selectKeyword = createSelector(
  selectModuleState,
  (shareAccount) => shareAccount.keyword,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectKeyword],
  (list, keyword) => {
    return list.filter((t) => !keyword || JSON.stringify(t).includes(keyword));
  },
);
