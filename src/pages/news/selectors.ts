import { createSelector } from 'reselect';
import { NewsState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: NewsState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
