import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const moduleName = 'baseballSingle';

export type BaseballSingleState = {
  tableData: any[];
};
const initialState: BaseballSingleState = {
  tableData: [],
};

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
  },
});

export const { gotTableData } = module.actions;
export default module.reducer;
