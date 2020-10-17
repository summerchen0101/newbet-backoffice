import { combineReducers } from 'redux'
import { sampleReducer } from './sample/reducers'

export const rootReducer = combineReducers({
  sample: sampleReducer,
})

export type RootState = ReturnType<typeof rootReducer>
