import { combineReducers } from 'redux'
import { sampleReducer } from './sample/reducers'
// import managerReducer from '@/pages/account/Manager/reducer'
import managerReducer from './slices/manager'
import { configureStore } from '@reduxjs/toolkit'

const reducer = {
  manager: managerReducer,
  sample: sampleReducer
}

export type RootState = {
  manager: ReturnType<typeof managerReducer>,
  sample: ReturnType<typeof sampleReducer>,
}

export default configureStore({ reducer })



