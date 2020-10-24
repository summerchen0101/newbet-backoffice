import { RootState } from '@/store';
import { createSelector } from 'reselect';

const selectModuleState = (state: RootState) => state.shareAccount;
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
