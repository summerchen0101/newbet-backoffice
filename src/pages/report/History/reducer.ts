import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const moduleName = 'historyReport';

export type HistoryReportState = {
  tableData: any[];
};
const initialState: HistoryReportState = {
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
