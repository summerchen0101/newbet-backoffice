import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  searchRole: '',
  searchStatus: '',
  searchKeyword: '',
  tableData: [],
  roleOptions: []
}

const counterSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload
    },
    changeRoleSearch(state, action: PayloadAction<string>) {
      console.log("changeRoleSearch")
      console.log(action.payload)
      state.searchRole = action.payload
    },
    changeStatusSearch(state, action: PayloadAction<string>) {
      state.searchStatus = action.payload
    },
    changeKeywordSearch(state, action: PayloadAction<string>) {
      state.searchKeyword = action.payload
    },
    gotRoleOptions(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload
    },
  },
})

export const {
  gotTableData,
  changeRoleSearch,
  changeStatusSearch,
  changeKeywordSearch,
  gotRoleOptions
} = counterSlice.actions
export default counterSlice.reducer
