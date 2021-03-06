import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type ShareAccountState = {
  keyword: string;
  tableData: any[];
};
const initialState: ShareAccountState = {
  keyword: undefined,
  tableData: [],
};

const module = createSlice({
  name: 'shareAccount',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    changeKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    initSearchState(state) {
      state.keyword = undefined;
    },
  },
});
export const { gotTableData, changeKeyword, initSearchState } = module.actions;
export default module.reducer;
