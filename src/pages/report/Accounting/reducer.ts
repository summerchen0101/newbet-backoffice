import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const moduleName = 'accounting';

export type AccountingState = {
  tableData: any[];
};
const initialState: AccountingState = {
  tableData: [],
};

const module = createSlice({
  name: 'rootChange',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
  },
});

export const { gotTableData } = module.actions;
export default module.reducer;
