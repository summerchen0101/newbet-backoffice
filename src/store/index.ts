import { combineReducers } from 'redux'
import { sampleReducer } from './sample/reducers'
import managerReducer from '@/pages/account/Manager/reducer'

export const rootReducer = combineReducers({
  sample: sampleReducer,
  manager: managerReducer,
})

export type RootState = ReturnType<typeof rootReducer>
