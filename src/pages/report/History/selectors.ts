import { createSelector } from 'reselect';
import { HistoryReportState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: HistoryReportState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
