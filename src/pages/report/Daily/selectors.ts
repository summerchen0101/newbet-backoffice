import { createSelector } from 'reselect';
import { DailyReportState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: DailyReportState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
