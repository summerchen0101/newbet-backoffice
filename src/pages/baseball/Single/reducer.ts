import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const moduleName = 'baseball';

export type BaseballState = {
  tableData: any[];
};
const initialState: BaseballState = {
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
