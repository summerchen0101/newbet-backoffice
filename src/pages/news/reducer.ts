import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const moduleName = 'news';

export type NewsState = {
  tableData: any[];
};
const initialState: NewsState = {
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
