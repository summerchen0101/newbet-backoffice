import { createSelector } from 'reselect';
import { GameResultState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: GameResultState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
